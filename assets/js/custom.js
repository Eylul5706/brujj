$(document).ready(function () {

    $("[data-action='share']").on('click', function () {
        $(this).attr('disabled', true);
        var dummy = document.createElement('input'),
            text = $(this).data('url');

        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);

        iziToast.show({
            color: '#a782e9',
            position: "topRight",
            title: 'Hey!',
            message: 'Panoya kopyalandı'
        });

        setTimeout(function () {
            $("[data-action='share']").removeAttr('disabled');
        }, 5000);
    });

    $("[data-action='go-link']").on('click', function () {
        let $data_url = $(this).data('url');
        window.location.href = $data_url;
    });

    $("#checkout_submit").on('click', function () {
        let $city = $('#city').val();
        let $address = $('#address').val();
        if ($city && $address) {
            $(this).attr('disabled', true);
            $('#checkout_form').submit();
        }
    });

    $(".js-spinner").WanSpinner({
        minValue: 1,
        maxValue: 9999999,
    });

    $('#update_account').on('submit', function (e) {
        e.preventDefault();
        let $post_url   = $(this).attr('action');
        let $submit_btn = $('#update_account_submit');
        $submit_btn.attr('disabled', true);

        $.post($post_url, $(this).serialize(), function (response) {
            if (response === 'success') {
                iziToast.success({
                    position: "topRight",
                    title: 'Tamamdır',
                    message: 'Hesap bilgileriniz başarıyla güncellendi'
                });
            } else {
                iziToast.error({
                    position: "topRight",
                    title: 'Opps',
                    message: response
                });
            }

            setTimeout(function () {
                $submit_btn.removeAttr('disabled');
            }, 5000);
        })
    });

    $('#update_password').on('submit', function (e) {
        e.preventDefault();
        let $post_url   = $(this).attr('action');
        let $submit_btn = $('#update_password_submit');
        $submit_btn.attr('disabled', true);

        $.post($post_url, $(this).serialize(), function (response) {
            if (response === 'success') {
                iziToast.success({
                    position: "topRight",
                    title: 'Tamamdır',
                    message: 'Şifreniz başarıyla değiştirildi'
                });
            } else {
                iziToast.error({
                    position: "topRight",
                    title: 'Opps',
                    message: response
                });
            }

            setTimeout(function () {
                $submit_btn.removeAttr('disabled');
            }, 5000);
        })
    });

});