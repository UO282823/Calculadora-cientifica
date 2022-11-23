class Calculadora{

    constructor(){
        this.memoria="";
        this.pantalla="";
        this.operando1="";
        this.operando2="";
        this.operador="";
        this.operadorAnterior="";
    }

    digitos(x){

        this.pantalla += Number(x).toString();
        //Para quitar los ceros a la izquierda
        this.pantalla=Number(this.pantalla);
        document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla;
        this.operadorAnterior="";
        this.operando2="";
    }

    punto(){
        this.pantalla+=".";
        document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla;
        this.operadorAnterior="";
        this.operando2="";
    }

    suma(){
        if(this.operador==""){
            this.operando1=this.pantalla;
            this.pantalla="";
            this.operador="+";
        }else{
            if(this.pantalla==""){
                return;
            }
            this.igual();
            this.pantalla="";
            this.operador="+";
        }      
    }
    resta(){
        if(this.operador==""){
            this.operando1=this.pantalla;
            this.pantalla="";
            this.operador="-";
        }else{
            if(this.pantalla==""){
                return;
            }
            this.igual();
            this.pantalla="";
            this.operador="-";
        }         
    }

    multiplicacion(){
        if(this.operador==""){
            this.operando1=this.pantalla;
            this.pantalla="";
            this.operador="*";
        }else{
            if(this.pantalla==""){
                return;
            }
            this.igual();
            this.pantalla="";
            this.operador="*";
        }         
    }

    division(){
        if(this.operador==""){
            this.operando1=this.pantalla;
            this.pantalla="";
            this.operador="/";
        }else{
            if(this.pantalla==""){
                return;
            }
            this.igual();
            this.pantalla="";
            this.operador="/";
        }         
    }

    mrc(){
        this.pantalla=this.memoria;
        document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla;
        
    }

    mMenos(){
        this.memoria=Number(this.memoria)-Number(this.pantalla) ;
    }

    mMas(){
        this.memoria=Number(this.memoria)+Number(this.pantalla) ;
    }

    borrar(){
        this.pantalla="";
        this.operando1="";
        this.operando2="";
        this.operador="";
        this.operadorAnterior="";
        document.querySelector('input[type=text][name=\"pantalla\"]').value =this.pantalla ;
    }

    igual(){
        if(this.operador!=""){
            this.operando2=this.pantalla;
        }else if(this.operadorAnterior!=""){
            this.operador=this.operadorAnterior;
        }else{
            return;
        }

        if(this.operando2==""){
            this.operando2=this.operando1;
        }


       
       try{
        var result=eval(Number(this.operando1)+this.operador+Number(this.operando2));
        if(result.toString()=="NaN"){
            throw  "Error de calculo";
        }
        this.pantalla=result;
        this.operando1=result;
        this.operadorAnterior=this.operador;
        this.operador="";
       }catch(err){
        this.pantalla="E";
       }
       document.querySelector('input[type=text][name=\"pantalla\"]').value =this.pantalla ;
        
    }

    porcentaje(){
        this.operando2=this.pantalla;
        if(this.operador=="" || this.operando2==""){
            return;
        }
        //Si suma o resta
        if(this.operador=="+" || this.operador=="-"){
            this.operando2=(Number(this.operando1)/Number(100))*Number(this.operando2);
            try{
                var result=eval(Number(this.operando1)+this.operador+Number(this.operando2));
                if(result.toString()=="NaN"){
                    throw  "Error de calculo";
                }
                this.pantalla=result;
                this.operando1=result;
                this.operadorAnterior="";
                this.operador="";
            }catch(err){
                this.pantalla="E";
            }
            document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla;
            return;
        }
        //Si multiplica
        if(this.operador=="*"){
            try{
                var result=eval(Number(this.operando1)*(Number(this.operando2)/Number(100)));
                if(result.toString()=="NaN"){
                    throw  "Error de calculo";
                }
                this.pantalla=result;
                this.operando1=result;
                this.operadorAnterior="";
                this.operador="";
            }catch(err){
                this.pantalla="E";
            }
            document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla;
            return;
        }

        //Si divide
        if(this.operador=="/"){
            try{
                var result=eval(Number(this.operando1)*(Number(100)/Number(this.operando2)));
                if(result.toString()=="NaN"){
                    throw  "Error de calculo";
                }
                this.pantalla=result;
                this.operando1=result;
                this.operadorAnterior="";
                this.operador="";
            }catch(err){
                this.pantalla="E";
            }
            document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla;
            return;
        }
    }

    raiz(){
        if(this.operador!=""){
            this.igual();
        }     
        try {
            var result=Math.sqrt(Number(this.pantalla)); 
            if(result.toString()=="NaN"){
                throw  "Error de calculo";
            }
            this.pantalla=result;
            this.operando1=result;
            this.operadorAnterior="";
            this.operador="";
        } catch (err) {
            this.pantalla="E";      
               
        }
        document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla;  
    }

    masMenos(){
       this.pantalla=(Number(this.pantalla)*(-1)).toString();
       document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla; 
    }


    pulsaTecla(tecla){
        switch (tecla){
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':  
            case '7':
            case '8':
            case '9':   
            case '0':
                this.digitos(tecla);
                break;
            case 'C':
                this.borrar();
                break;
            case '+':
                this.suma();
                break;
            case '-':
                this.resta();
                break;
            case '*':
                this.multiplicacion();
                break;
            case '/':
                this.division();   
                break;
            case 'r':
                this.raiz();
                break;
            case 'm':
                this.mrc();
                break;
            case 'o'  :
                this.borrar();
                break;
            case 'n':
                this.mMas();
                break;
            case 'b':
                this.mMenos();
                break;
            case 'v':
                this.masMenos();
                break;
            case '.':
                this.punto();
                break;
            case '=':
                this.igual();    
                break;
            case '%':
                this.porcentaje();            

        }
    }


    
    


}

class CalculadoraCientifica extends Calculadora{

    constructor(){       
        super();
        this.deg=true;
        this.shift=false;
        this.e=false;
        this.hyp=false;
    }

    hy(){
        this.hyp=!this.hyp;
        if(this.hyp==true){
            this.shift=false;
        }
        if(this.hyp==true){
            document.querySelector('input[value=\"sin\"]').value="sinh";
            document.querySelector('input[value=\"cos\"]').value="cosh";
            document.querySelector('input[value=\"tan\"]').value="tanh";
        }else{
            document.querySelector('input[value=\"sinh\"]').value="sin";
            document.querySelector('input[value=\"cosh\"]').value="cos";
            document.querySelector('input[value=\"tanh\"]').value="tan";
        }
    }

    de(){
        this.deg=!this.deg;
        if(this.deg==false){
            document.querySelector('input[value=\"DEG\"]').value="RAD";
        }else{
            document.querySelector('input[value=\"RAD\"]').value="DEG";
        }
    }

    shif(){
        if(this.hyp==true){
            return;
        }
        this.shift=!this.shift;
        if(this.shift==true){
            document.querySelector('input[value=\"sin\"]').value="asin";
            document.querySelector('input[value=\"cos\"]').value="acos";
            document.querySelector('input[value=\"tan\"]').value="atan";
        }else{
            document.querySelector('input[value=\"asin\"]').value="sin";
            document.querySelector('input[value=\"acos\"]').value="cos";
            document.querySelector('input[value=\"atan\"]').value="tan";
        }
    }

    fe(){
        this.e=!this.e;
        if(this.e==true){
            try{
                var cambiar= Number(this.pantalla).toExponential();
                if(cambiar.toString()=="NaN"){
                    throw  "Error de calculo";
                }
                this.pantalla=cambiar;
            }catch(err){

            }
        }else{
            try{
                var cambiar= Number(this.pantalla).toString();
                if(cambiar.toString()=="NaN"){
                    throw  "Error de calculo";
                }
                this.pantalla=cambiar;
            }catch(err){

            }
        }
        document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla; 
    }

    digitos(x){
        this.pantalla+=x.toString();
        document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla; 
    }

    punto(){
        this.pantalla+=".";
        document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla; 
    }

    suma(){
        this.pantalla+="+";
        document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla; 
    }

    resta(){
        this.pantalla+="-";
        document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla; 
    }

    multiplicacion(){
        this.pantalla+="*";
        document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla; 
    }
    division(){
        this.pantalla+="/";
        document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla; 
    }

    igual(){
        var evaluar=this.pantalla.toString().replace("π","Math.PI");
        evaluar=evaluar.replace("√","Math.sqrt");
        evaluar=evaluar.replace("^","**");
        evaluar=evaluar.replace("log","Math.log");
        evaluar=evaluar.replace("mod","%");

        if(this.deg==true){
            evaluar=evaluar.replace("sinh(","Math.sinh((Math.PI/180)*");
            evaluar=evaluar.replace("cosh(","Math.cosh((Math.PI/180)*");
            evaluar=evaluar.replace("tanh(","Math.tanh((Math.PI/180)*");
        }else{
            evaluar=evaluar.replace("sinh(","Math.sinh(");
            evaluar=evaluar.replace("cosh(","Math.cosh(");
            evaluar=evaluar.replace("tanh(","Math.tanh(");
        }
        

            if(this.deg==true){
                evaluar=evaluar.replace("asin(","(180/Math.PI)*Math.asin(");
                evaluar=evaluar.replace("acos(","(180/Math.PI)*Math.acos(");
                evaluar=evaluar.replace("atan(","(180/Math.PI)*Math.atan(");
            }else{
                evaluar=evaluar.replace("asin(","Math.asin(");
                evaluar=evaluar.replace("acos(","Math.acos(");
                evaluar=evaluar.replace("atan(","Math.atan(");
            }

            if(this.deg==true){
                evaluar=evaluar.replace("sin(","Math.sin((Math.PI/180)*");
                evaluar=evaluar.replace("cos(","Math.cos((Math.PI/180)*");
                evaluar=evaluar.replace("tan(","Math.tan((Math.PI/180)*");
            }else{
                evaluar=evaluar.replace("sin(","Math.sin(");
                evaluar=evaluar.replace("cos(","Math.cos(");
                evaluar=evaluar.replace("tan(","Math.tan(");
            }
       
        
        try{
            evaluar=Number(eval(evaluar));
            if(evaluar.toString()=="NaN"){
                throw  "Error de calculo";
            }
            if(this.e==true){
                this.pantalla=Number(evaluar).toExponential();
            }else{
                this.pantalla=evaluar;
            }
            
        }catch(err){
            this.pantalla="Error";
        }
        document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla; 
    }


    borrarDigito(){
        if(this.pantalla.toString().length>0){
            this.pantalla=this.pantalla.toString().substring(0,this.pantalla.toString().length-1);
            document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla; 
        }
    }

    raiz(){
        this.pantalla+="√(";
        document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla; 
    }

    abrePar(){
        this.pantalla+="(";
        document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla; 
    }

    cierraPar(){
        this.pantalla+=")";
        document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla; 
    }

    pi(){
        this.pantalla+="π";
        document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla; 
    }

    log(){
        this.pantalla+="log(";
        document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla; 
    }

    cuadrado(){
        this.pantalla+="^2";
        document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla;
    }

    xy(){
        this.pantalla+="^";
        document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla;
    }

    sin(){
        if(this.hyp==false){
            if(this.shift==false){
                this.pantalla+="sin(";
            }else{
                this.pantalla+="asin(";
            }
        }else{
            this.pantalla+="sinh(";
        }

        document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla;
    }

    cos(){
        if(this.hyp==false){
            if(this.shift==false){
                this.pantalla+="cos(";
            }else{
                this.pantalla+="acos(";
            }
        }else{
            this.pantalla+="cosh(";
        }

        
        document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla;
    }

    tan(){
        if(this.hyp==false){
            if(this.shift==false){
                this.pantalla+="tan(";
            }else{
                this.pantalla+="atan(";
            }
        }else{
            this.pantalla+="tanh(";
        }

        document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla;
    }
    
    pot10(){
        this.pantalla+="10^";
        document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla;
    }

    exp(){
        this.pantalla+="e+";
        document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla;
    }

    masMenos(){
        try{
            var nuevaP=(Number(this.pantalla)*-1).toString();
            if(nuevaP.toString()=="NaN"){
                throw  "Error de calculo";
            }
            this.pantalla=nuevaP;
            document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla;
        }catch(err){
        }   
    }

    mod(){
        this.pantalla+="mod";
        document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla;
    }

    factorial() {
        var aux;
        try {
            aux = this.pantalla;
            var total = 1; 
        
            for (var i = 1; i <= aux; i++) {
                total = total * i; 
            } 
            
            this.ans = total;
            this.pantalla= total;
        }
        catch (err) {
            this.pantalla =  "Error";
        }
        document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla;
}

    ms(){
        if(Number(this.pantalla).toString()!="Nan"){
            this.memoria=this.pantalla;
        }
        
    }
    mr(){
        this.pantalla=this.memoria;
        document.querySelector('input[type=text][name=\"pantalla\"]').value = this.pantalla;
    }

    mc(){
        this.memoria="";
    }

    pulsaTecla(tecla){
        switch (tecla){
            case 'l':
                this.log();
                break;
            case 'd':
                this.de();
                break;
            case 'h':
                this.hy();
                break;
            case 'f':
                this.fe();
                break;
            case 'm':
                this.mc();
                break;
            case 'q':
                this.mr();
                break;
            case 's':
                this.ms();
                break;
            case 'x':
                this.cuadrado();
                break;
            case 'y':
                this.xy();
                break;
            case 'S':
                this.sin();
                break;
            case 'C':
                this.cos();
                break;
            case 'T':
                this.tan();
                break;
            case 'p':
                this.pot10();
                break;
            case 'e':
                this.exp();
                break;
            case 'M':
                this.mod();
                break;
            case 'R':
                this.borrarDigito();
                break;
            case 'Q':
                this.shif();
                break;
            case 'P':
                this.pi();
                break;
            case 'F':
                this.factorial();
                break;
            case '(':
                this.abrePar();
                break;
            case ')':
                this.cierraPar();
                break;


        }
        super.pulsaTecla(tecla);
       
    }

    
    

}

calculadora = new CalculadoraCientifica();

document.addEventListener('keydown',(event)=>calculadora.pulsaTecla(event.key));