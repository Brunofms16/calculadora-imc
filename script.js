const btn = document.getElementById("btn")




 
   btn.addEventListener("click" , function() {


    const peso = document.getElementById("peso").value;
    const alt = document.getElementById("alt").value/100;
    const st = document.getElementById("st")
   
    
   
    var result = peso / (alt)** 2 ;
    let resultado = result.toFixed(2)


    if (result <16 ) {
      console.log("magro")
      st.innerHTML = `<h3 id="texto"  style="color: white;">Magreza Grau III</h3>`
   }

    if (result <17  ) {
      console.log("magro")
      st.innerHTML = `<h3  id="texto"  style="color: white;">Magreza Grau II</h3>`
   }

 if (result <18.5  ) {
    console.log("magro")
    st.innerHTML = `<h3  id="texto"  style="color:white;">Magreza Grau I</h3>`
 }
 
 else if (result  <25) {
    console.log("adequado")
    st.innerHTML = `<h3  id="texto" style="color: green;">Adequado</h3>`
   
 }
 
 else if (result  <30) {
    console.log("pre-obeso")
    st.innerHTML = `<h3  id="texto"   style="color:yellow;" >Pré-obeso</h3>`
 }

 else if (result  <35) {
    console.log("Obesidade |")
    st.innerHTML = `<h3  id="texto"  style="color: orange; ">Obesidade Grau I</h3>`
 }
 else if (result  <40) {
    console.log("Obesidade ||")
    st.innerHTML = `<h3  id="texto"  style="color: orange;">Obesidade Grau II</h3>`
 }
 else if (result >40) {
    console.log("Obesidade |||")
    st.innerHTML = `<h3  id="texto"  style="color: red;">Obesidade Grau III</h3>`
 }
 
 if (isNaN(result)) {
   resultado = "Valor invalido"
}

    document.querySelector("#result > span").textContent = resultado;

   
   const tipoCalculo = document.querySelector('input[name="tipo"]:checked').value;
   let imc;
 

 
   document.getElementById('imc').value = imc.toFixed(2);
 }


)

 
 