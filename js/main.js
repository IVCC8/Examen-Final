
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'dui-yellow': '#F3E17E',
                'dui-gold': '#C4881B',
                'dui-brown': '#85410D',
                'dui-sand': '#CFA65D',
                'dui-pale': '#C2DCD0',
                'dui-teal': '#3696A0',
                'dui-dark': '#332A14',
                'dui-orange': '#EBA93F',
                'dui-sage': '#6F8A85',
            }
        }
    }
}

AOS.init({

    once: true,

    offset: 100,

    duration: 800,

    easing: 'ease-in-out',

});