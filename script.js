let personName = document.querySelector("#inpt");
        let userInpt = document.querySelector(".userInpt");
        let qouteP = document.querySelector("#qouteP");
        let btnSubmit = document.querySelector("#submit");

        const link = encodeURI(window.location.href);
        const msg = encodeURIComponent();
        const title = encodeURIComponent(document.querySelector('title').textContent)
        
        const share = document.querySelector("#share");
        const download = document.querySelector("#download");
        
        
        share.addEventListener('click', event => {
			if (navigator.share) {
				navigator.share({

					title: "Happy Valentine Day",
					url: link,
                    text: "Hi, " + personName.value + " I found a beautiful message for you!!"
				}).then(() => {
					console.log('Thanks for sharing!');
				}).catch(err => {
					console.log(
					"Error while using Web share API:");
					console.log(err);
				});
			} else {
				alert("Browser doesn't support this API !");
			}
		})
        
        console.log([link, msg, title]);

        btnSubmit.addEventListener("click", function(){
            let person = personName.value;
            document.querySelector("#name").innerHTML = person;
            qouteP.style.display = "block";
            userInpt.classList.add("btns-h");
        })
        
        let hide = document.querySelector(".hide");
        let wrapper = document.querySelector(".wrapper");
        let hide1 = document.querySelector(".btns");
        
        let yes = document.querySelector("#yes");
        yes.addEventListener("click", function(){
            document.querySelector("#afterText").innerHTML = "Thank You So Much &hearts;&hearts;&hearts;<br>" + personName.value;
            hide.classList.add("block");
            hide1.classList.add("btns-h");
            share.style.display = "block";
            download.style.display = "block";
            // hide.classList.remove("btns");
        })

        let no = document.querySelector("#no");
        const wrapperRect = wrapper.getBoundingClientRect();
        const noRect = no.getBoundingClientRect();
        no.addEventListener("mouseover", ()=>{
            const i = Math.floor(Math.random() * (wrapperRect.width - noRect.width)) + 1;
            const j = Math.floor(Math.random() * (wrapperRect.height - noRect.height)) + 1;

            no.style.left = i + 'px';
            no.style.top = j + 'px';
        })

        function autoClick(){
        $("#download").click();
      }

      $(document).ready(function(){
        var element = $(".wrapper");

        $("#download").on('click', function(){

          html2canvas(element, {
            onrendered: function(canvas) {
              var imageData = canvas.toDataURL("image/jpg");
              var newData = imageData.replace(/^data:image\/jpg/, "data:application/octet-stream");
              $("#download").attr("download", "valentine.jpg").attr("href", newData);
            }
          });

        });
      });