(function($) {
    $.widget("ui.combobox", {
        _create: function() {
            var input, self = this,
                select = this.element.hide(),
                selected = select.children(":selected"),
                value = selected.val() ? selected.text() : "",
                wrapper = this.wrapper = $("<span>").addClass("ui-combobox").insertAfter(select);
			var sClass = this.element.attr('class');
			var sPlaceHolder = "";
			if (sClass == "cCity")
				sPlaceHolder = " placeholder='Nama Kota'"
			else if (sClass == "fPort")
				sPlaceHolder = " placeholder='Kota atau Kode Bandara'"
			
            input = $("<input"+sPlaceHolder+">").appendTo(wrapper).val(value).addClass("ui-state-default ui-combobox-input").autocomplete({
                delay: 0,
                minLength: 3,
                source: function(request, response) {
                    var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");

                    response(select.find("option").map(function() {
                        var text = $(this).text();
                        if (this.value && (!request.term || matcher.test(text))) return {
                            label: text.replace(
                            new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(request.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>"),
                            value: text,
                            option: this,
                            category: $(this).closest("optgroup").attr("label")
                        };
                        //MK 
                        //$('#test').attr('style', 'display: none;');
                    }).get());
                },
                select: function(event, ui) {
                    ui.item.option.selected = true;
                    self._trigger("selected", event, {
                        item: ui.item.option
                    });
                },
                change: function(event, ui) {
                    if (!ui.item) {
                        var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex($(this).val()) + "$", "i"),
                            valid = false;
                        select.children("option").each(function() {
                            if ($(this).text().match(matcher)) {
                                this.selected = valid = true;
                                return false;
                            }
                        });
                        if (!valid) {
                            //$('#test').attr('style', 'display: block;');
                            // remove invalid value, as it didn't match anything
                            //$( this ).val( "" );
                            //select.val( "" );
                            //input.data( "autocomplete" ).term = "";
                            //return false;                    
                        }
                    }
                }
            }).addClass("ui-widget ui-widget-content ui-corner-left");

            input.data("autocomplete")._renderItem = function(ul, item) {
                return $("<li></li>").data("item.autocomplete", item).append("<a>" + item.label + "</a>").appendTo(ul);
            };

            input.data("autocomplete")._renderMenu = function(ul, items) {
                var self = this,
                    currentCategory = "";
                $.each(items, function(index, item) {
                    if (item.category != currentCategory) {
                        if (item.category) {
                            ul.append("<li class='ui-autocomplete-category'>" + item.category + "</li>");
                        }
                        currentCategory = item.category;
                    }
                    self._renderItem(ul, item);
                });
            };
        },

        destroy: function() {
            this.wrapper.remove();
            this.element.show();
            $.Widget.prototype.destroy.call(this);
        }
    });
})(jQuery);
