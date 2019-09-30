 $(document).ready(function(){


    $('.pluss').click(function(){
        var cariKnopka= this;
        var monitor=$(cariKnopka).prev();
        var value = $(monitor).val();
        value++;
        $(monitor).val(value);
        console.log(value);
        });
        
        $('.minuss').click(function(){
            var cariKnopka= this;
            var monitor=$(cariKnopka).next();
            var value = $(monitor).val();
            value--;
            $(monitor).val(value);
            console.log(value);
            });

 })



