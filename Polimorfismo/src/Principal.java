 
public class Principal {

	public static void main(String[] args) {
		
		Mamifero m = new Mamifero();
		Reptil r = new Reptil();
		Peixe p = new Peixe();
		Ave a = new Ave();
		
		Canguru c = new Canguru();
		Cachorro k = new Cachorro();
		Cobra j = new Cobra();
		Tartaruga t = new Tartaruga();
		GoldFish g = new GoldFish();
		Arara e = new Arara();
		
		c.locomover();
		c.usarBolsa();
		c.emitirSom();

		k.locomover();
		k.emitirSom();
		
	} 

}
