package encapsulamento;

public class Principal {

	public static void main(String[] args) {
		ControleRemoto c = new ControleRemoto();
		c.ligar();
		c.maisVolume();
		c.abrirMenu();
		c.fecharMenu();
	}

}
