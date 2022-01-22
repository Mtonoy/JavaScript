"$("".Class"").each(function (i) {
                len = $(this).text().length;
                if (len > 30) {
                    $(this).text($(this).text().substr(0, 30) + '...');
                }
            });"
