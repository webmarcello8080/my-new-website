jQuery(document).ready(function () {
    selected = jQuery('input[name="news-search-engine-type"]:checked').val();
    displayForm(selected);

    // display parts of the form based on the selected endpoint
    jQuery("input[name='news-search-engine-type']").change(function () {
        selected = jQuery('input[name="news-search-engine-type"]:checked').val();
        displayForm(selected);
    });

    // manage pagination click
    jQuery(".select-page").click(function () {
        jQuery('input[name="news-search-engine-page"]').val(jQuery(this).data("page"));
        jQuery("#submit").click();
    });

    // AJAX call in source field
    jQuery('input[name="news-search-engine-sources"]').keyup(function () {
        search = jQuery(this).val();
        search = search.split(",").pop();

        if (search && search.length > 2) {
            jQuery.ajax({
                type: "POST",
                url: ajaxData.ajaxurl,
                data: {
                    action: 'news_search_source',
                    source: search,
                    language: jQuery('select[name="news-search-engine-language"]').val(),
                    country: jQuery('select[name="news-search-engine-country"]').val(),
                    category: jQuery('select[name="news-search-engine-category"]').val(),
                },
                beforeSend: function () {
                    jQuery('.news-search-engine-source-loader').show();
                },
                success: function (data) {
                    jQuery('.news-search-engine-source-loader').hide();
                    jQuery("#source-suggesstion-box").show();
                    jQuery("#source-suggesstion-box").html(data);
                }
            });
        } else {
            jQuery("#source-suggesstion-box").hide();
        }
    });

    // AJAX call in source field
    jQuery('input[name="news-search-engine-domains"]').keyup(function () {
        search = jQuery(this).val();
        search = search.split(",").pop();

        if (search && search.length > 2) {
            jQuery.ajax({
                type: "POST",
                url: ajaxData.ajaxurl,
                data: {
                    action: 'news_search_domain',
                    domain: search,
                    language: jQuery('select[name="news-search-engine-language"]').val(),
                    country: jQuery('select[name="news-search-engine-country"]').val(),
                    category: jQuery('select[name="news-search-engine-category"]').val(),
                },
                beforeSend: function () {
                    jQuery('.news-search-engine-domains-loader').show();
                },
                success: function (data) {
                    jQuery('.news-search-engine-domains-loader').hide();
                    jQuery("#domain-suggesstion-box").show();
                    jQuery("#domain-suggesstion-box").html(data);
                }
            });
        } else {
            jQuery("#domain-suggesstion-box").hide();
        }
    });

});

function selectSource(val) {
    tempString = jQuery('input[name="news-search-engine-sources"]').val().substring(0, jQuery('input[name="news-search-engine-sources"]').val().lastIndexOf(","));
    if (tempString) {
        jQuery('input[name="news-search-engine-sources"]').val(tempString + ',' + val + ',');
    } else {
        jQuery('input[name="news-search-engine-sources"]').val(val + ',');
    }
    jQuery("#source-suggesstion-box").hide();
}

function selectDomain(val) {
    tempString = jQuery('input[name="news-search-engine-domains"]').val().substring(0, jQuery('input[name="news-search-engine-domains"]').val().lastIndexOf(","));
    if (tempString) {
        jQuery('input[name="news-search-engine-domains"]').val(tempString + ',' + val + ',');
    } else {
        jQuery('input[name="news-search-engine-domains"]').val(val + ',');
    }
    jQuery("#domain-suggesstion-box").hide();
}

var hideForm = function () {
    jQuery(".sources").hide();
    jQuery(".topHeadlines").hide();
    jQuery(".everything").hide();
};

var displayForm = function (radioValue) {
    hideForm();
    jQuery("." + radioValue).show();
};