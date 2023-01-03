
public class Reptil extends Animal {

	private String corEscamas;

	@Override
	public void locomover() {
		System.out.println("Rastejando");		
	}

	@Override
	public void alimentar() {
		
		System.out.println("Comendo vegetais");
	}

	@Override
	public void emitirSom() {
		System.out.println("Emitindo som de r�ptil");		
	}

	public String getCorEscamas() {
		return corEscamas;
	}

	public void setCorEscamas(String corEscamas) {
		this.corEscamas = corEscamas;
	}
	
}
