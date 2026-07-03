$(document).ready(function() {
    
    // Inejct link gambar Bank Di Sini Lek
    const newLinks = [
        "https://alt-img.b-cdn.net/mawar500/tampilan/bank/qris.gif",
        "https://alt-img.b-cdn.net/mawar500/tampilan/bank/bca.gif",
        "https://alt-img.b-cdn.net/mawar500/tampilan/bank/bni.gif",
        "https://alt-img.b-cdn.net/mawar500/tampilan/bank/bri.gif",
        "https://alt-img.b-cdn.net/mawar500/tampilan/bank/mandiri.gif",
        "https://alt-img.b-cdn.net/mawar500/tampilan/bank/dana.gif",
        "https://alt-img.b-cdn.net/mawar500/tampilan/bank/ovo.gif",
        "https://alt-img.b-cdn.net/mawar500/tampilan/bank/gopay.gif",
        "https://alt-img.b-cdn.net/mawar500/tampilan/bank/shopeeoay.gif",
        "https://alt-img.b-cdn.net/mawar500/tampilan/bank/seabank.gif",
        "https://alt-img.b-cdn.net/mawar500/tampilan/bank/jago.gif",
        "https://alt-img.b-cdn.net/mawar500/tampilan/bank/neo.gif",
        "https://alt-img.b-cdn.net/mawar500/tampilan/bank/jenius.gif",
        "https://alt-img.b-cdn.net/mawar500/tampilan/bank/sakuku.gif",
        "https://alt-img.b-cdn.net/mawar500/tampilan/bank/linkaja.gif",
        "https://alt-img.b-cdn.net/mawar500/tampilan/bank/bsi.gif",
        "https://alt-img.b-cdn.net/mawar500/tampilan/bank/btn.gif",
        "https://alt-img.b-cdn.net/mawar500/tampilan/bank/mega.gif",
        "https://alt-img.b-cdn.net/mawar500/tampilan/bank/panin.gif",
        "https://alt-img.b-cdn.net/mawar500/tampilan/bank/permata.gif",
        "https://alt-img.b-cdn.net/mawar500/tampilan/bank/cimb.gif",
        "https://alt-img.b-cdn.net/mawar500/tampilan/bank/danamon.gif"
        
    ];
    
    const targetTitle = 'Cara Pembayaran';
    
    const $paymentLogosContainer = $('.my-5 h3:contains("' + targetTitle + '")').next('.row.g-1');

    if ($paymentLogosContainer.length) {
        const $logoColumns = $paymentLogosContainer.find('.col-4');

        $logoColumns.each(function(index) {
            const $col = $(this);
            const $image = $col.find('img'); 
            
            if ($image.length) {
                $image.appendTo($col).addClass('payment-logo-img');
                $col.contents().filter(function() {
                    return this.nodeType === 1 && this.tagName.toLowerCase() !== 'img';
                }).remove();
            }

            if (index < newLinks.length) {
                if ($image.length) {
                    $image.attr('src', newLinks[index]);
                    $image.attr('alt', newLinks[index].split('/').pop().split('.')[0].toUpperCase()); 
                }
            } else {
                $col.remove();
            }
        });
    }

    const style = `
        .payment-logo-img {
            height: auto;
            /* INI BENCANA*/
            max-height: 120px !important; 
            max-width: 120px !important;
            filter: none !important;
            display: block; 
            margin: 0 auto; /* Hilangkan margin vertikal default */
        }
        .my-5 .row.g-1 {
            justify-content: center; 
        }
        .col-4.col-md-3.col-lg-2.text-center {
            /* NILAI BARU: JARAK LEBIH DEKAT */
            padding: 0.3px !important; 
        }
    `;
    $('head').append('<style>' + style + '</style>');
    //console.log("Ikutin-aja-kali-batu-bet.");
});
