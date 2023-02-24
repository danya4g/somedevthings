let pm = {
    test: {
        pretest:{
            oneMoreStep: function() {
                let x = "Выведи меня:)";
                return x;
            }
        }
    },
    expect: function() {
        let x = "А меня пока не надо:(";
        return x;
    }
};

console.log(pm.test.pretest.oneMoreStep());