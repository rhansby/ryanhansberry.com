$(document).ready(function() {
    $('#control-tabs li').click(function() {
        $('#control-tabs li').removeClass('selected');
        $(this).addClass('selected');

        $('.control-panel').hide();
        var id = $(this).attr('id').substr(4, 5);
        $('#panel-' + id).show('fast');
    });

    $('.slider').on('input', function() {
        var val = $(this).val();
        var id = $(this).data('slider-value-target');
        $('#slider-value-' + id).text(val);

        var planet_id = $(this).parents('.control-panel').data('planet-id');
        var new_attribute_name = $(this).parent().attr('class');
        var new_attributes = {};
        new_attributes[new_attribute_name] = val;

        App.updatePlanetAttributes(planet_id, new_attributes);
    });
});
