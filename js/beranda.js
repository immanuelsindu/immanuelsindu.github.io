window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY;
    var screenWidth = window.innerWidth;
    if (scrollTop > 100 && screenWidth >= 1000) {
        document.querySelector('.mySticky').classList.add('paddingTop');
    } else {
        document.querySelector('.mySticky').classList.remove('paddingTop');
    }
});

var app = Vue.createApp({
    data() {
        return {
            angkatan: 2015,
            isOn:false,
            radioValue:"pilihan1",
            items:[
                {
                    myRadioValue:"pilihan1",
                    data:
                        [
                            {id:"bagianCatatan",pos:1},
                            {id:"bagianCatatanDosen",pos:2},
                            {id:"bagianGrupAngkatan",pos:3}
                        ]
                },
                {
                    myRadioValue:"pilihan2",
                    data:
                    [
                        {id:"bagianGrupAngkatan",pos:1},
                        {id:"bagianCatatan",pos:2},
                        {id:"bagianCatatanDosen",pos:3},
                    ]
                }
            ]
        }
    },
    methods:{
        simpan(){
            if(this.radioValue == "pilihan1"){
                this.isOn = false;
                /*mulai atur urutan berdasarkan pilihan pengguna*/
                this.items[0].data.forEach(dataPosisi=>{
                        const element = document.getElementById(dataPosisi.id);
                        element.style.order = dataPosisi.pos;
                    })
                this.isChecked1 = true;
                this.isChecked2 = false;
                
            }else if(this.radioValue == "pilihan2"){
                this.isOn = false;
                /*mulai atur urutan berdasarkan pilihan pengguna*/
                this.items[1].data.forEach(dataPosisi=>{
                    const element = document.getElementById(dataPosisi.id);
                    element.style.order = dataPosisi.pos;
                })
                this.isChecked1 = false;
                this.isChecked2 = true;
            }
            var x = document.getElementById("snackbar");
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        },
        reorder(){
            this.items.forEach(item => {
                const element = document.getElementById(item.id);
                element.style.order = item.pos;
            });
        },
        showPopUpPreferensi(){
            this.isOn = true;
        },
        batal(){
            this.isOn = false;
        },
        
    }
})
app.mount("#content")