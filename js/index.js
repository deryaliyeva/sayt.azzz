    const openClose = document.getElementById('openClose')
    const arr = ['.az', '.com', '.net', '.info', '.biz', '.org', '.us', '.in', '.ws', '.mobi', '.tv', '.me', '.ru', '.de', '.com.az', '.co', '.site.az', '.sayt.az', '.ureb.com', '.org.az', '.info.az', '.biz.az', '.net.az']
    const domens = document.getElementById('domens')
    const month1 = document.getElementById('month1')
    const month2 = document.getElementById('month2')
    const month3 = document.getElementById('month3')
    const webcalc = document.getElementById('webcalc')
    const searchCalc = document.getElementById('searchCalc')
    const electronCalc = document.getElementById('electronCalc')
    const pages = document.getElementById('pages')
    const inp1 = document.querySelector('#inp1')
    const inp2 = document.querySelector('#inp2')
    const qiymetler = document.getElementById('qiymetler')
    const inp3 = document.getElementById('inp3')
    const qiymetler4 = document.getElementById('qiymetler4')    
    const qiymetler2 = document.getElementById('qiymetler2')    
    const qiymetler3 = document.getElementById('qiymetler3')    

    const statik = document.getElementById('statik')
    const statik1 = document.getElementById('statik1')
    const statik2 = document.getElementById('statik2')
    const statik3 = document.getElementById('statik3')
    const statik4 = document.getElementById('statik4')
    const totalpr = document.getElementById('totalpr')
    let ntc = 0
    let sumRange = 0
    let sumRange1 = 0
    let sumRange2 = 0


    let kod = '';
    arr.map(item => {kod += `<option>${item}</option>`})
    domens.innerHTML += kod

    let flag = true
    function likeOpen() {
        openClose.style.right = flag ? '0%' : '-100%'
        flag = !flag
    }

    function change(selected) {
        const ayliq = document.getElementById("ayliq");
        const illik = document.getElementById("illik");

        if (selected === "ayliq") {
            ayliq.style.background = "#A271F2";
            ayliq.style.color = "white";
            ayliq.style.padding = "10px 40px";
            ayliq.style.borderRadius = "25px";

            illik.style.background = "white";
            illik.style.color = "#b5b5b5";
            illik.style.padding = "10px 40px";
            illik.style.borderRadius = "25px";

            month1.innerHTML = `
                            <h3 class="text-4xl font-[600]">₼5</h3>
                            <span class="px-2">/ay</span>
            `
            month2.innerHTML = `
                        <h3 class="text-4xl font-[600]">₼10</h3>
                        <span class="px-2">/ay</span>
            `
            month3.innerHTML = `
                        <h3 class="text-4xl font-[600]">₼120</h3>
                        <span class="px-2">/ay</span>
            `
        } else {
            illik.style.background = "#A271F2";
            illik.style.color = "white";
            illik.style.padding = "10px 40px";
            illik.style.borderRadius = "25px";
            
            ayliq.style.background = "white";
            ayliq.style.color = "#b5b5b5";
            ayliq.style.padding = "10px 40px";
            ayliq.style.borderRadius = "25px";
            
            month1.innerHTML = `
                    <h3 class="text-4xl font-[600]">₼60</h3>
                    <span class="px-2">/il</span>
            `
            month2.innerHTML = `
                    <h3 class="text-4xl font-[600]">₼120</h3>
                    <span class="px-2">/il</span>
            `
            month3.innerHTML = `
                    <h3 class="text-4xl font-[600]">₼240</h3>
                    <span class="px-2">/il</span>
            `
        }
    }

    function scrollB(){
        
        scrollTo({
            top: bloglar.offsetTop - 96,
            behavior: "smooth"
        })
    }
   function calculator(){
    rangeData.map(item => {
        webcalc.innerHTML += `
                        <label class="relative flex cursor-pointer justify-between items-center">
                            <span class="text-sm font-medium text-gray-900">${item.name}</span>
                            <input onclick="changePrice(this, ${item.price})" type="checkbox" id="${item.id}">
                        </label>
        `
    })

    checkData.map(item => {
        searchCalc.innerHTML += `
                           <div class="flex items-center mr-2 cursor-pointer">
                                <input onclick="changePrice2(this, ${item.price})" type="checkbox" id="${item.id}" />
                              <p class="p-2">${item.name}</p>
                            </div> 
                        `
    })
    eccomerceData.map(item => {
        electronCalc.innerHTML += `
                        <label class="relative flex cursor-pointer justify-between items-center">
                            <span class="text-sm font-medium text-gray-900">${item.name}</span>
                            <input onclick="changePrice3(this, ${item.price})" type="checkbox" id="${item.id}"> 
                        </label> 
                        `
    })
   }
   calculator()
   let inputs = 0
   function change1(){
        inputs = (+inp1.value * 100) * (+inp2.value)
        pages.innerHTML = +inp1.value + " səhifə / " + ((+inp1.value * 100) * (+inp2.value)) + " ₼ " 
        statik.innerHTML = " ₼ " + inputs
        totalCalc()
    }
    change1()

    
    function changePrice(elem, price){
        if(elem.checked) sumRange += price
        else sumRange -= price
        qiymetler.innerHTML = " ₼ " + sumRange
        statik1.innerHTML = " ₼ " + sumRange
        totalCalc()
    }
    function changePrice2(elem, price){
        if(elem.checked) sumRange1 += price
        else sumRange1 -= price 
        qiymetler2.innerHTML = " ₼ " + sumRange1 
        statik2.innerHTML = " ₼ " + sumRange1
        totalCalc()
    }

    function changePrice3(elem, price){
        if(elem.checked) sumRange2 += price
        else sumRange2 -= price
        qiymetler3.innerHTML = " ₼ " + sumRange2
        statik3.innerHTML = " ₼ " + sumRange2
        totalCalc()
    }

    function logoinp(){
        qiymetler4.innerHTML = " ₼ " + inp3.value * 100
        statik4.innerHTML = " ₼ "  + inp3.value * 100
        totalCalc()
    }

    function totalCalc(){   
        let x = sumRange + sumRange1 + sumRange2 + inp3.value * 100 + inputs
        if(x < 450) totalpr.innerHTML = " ₼ " + 450
        else totalpr.innerHTML = " ₼ " + x
    }
    totalCalc()
    