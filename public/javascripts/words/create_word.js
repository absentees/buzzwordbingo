/**
 * Created with JetBrains WebStorm.
 * User: Scott
 * Date: 14/06/12
 * Time: 10:44 PM
 * To change this template use File | Settings | File Templates.
 */

$("#createWordForm").submit(function(event){
    event.preventDefault();

    var $form = $(this),
        text = $form.find('input[name="text]'.val(),
        url = $form.attr('action'));

    $.post(url,{text:text},
    function(data){
       console.log("Sent new Buzzword: " + data);
    })
})

