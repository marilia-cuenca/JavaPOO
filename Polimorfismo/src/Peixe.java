
public class Peixe extends Animal {

	private String corEscamas;
	
	@Override
	public void locomover() {
		System.out.println("Nadando");
		
	}

	@Override
	public void alimentar() {
		System.out.println("Comendo subst�ncias");
		
	}

	@Override
	public void emitirSom() {
		System.out.println("Peixe n�o emite som");
		
	}

	public void soltarBolhas() {
		
		System.out.println("Soltando bolhas");
	}

	public String getCorEscamas() {
		return corEscamas;
	}

	public void setCorEscamas(String corEscamas) {
		this.corEscamas = corEscamas;
	}
	
	
	
}
