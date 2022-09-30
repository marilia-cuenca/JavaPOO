package CursoEmVideo;

public class ContaBanco {
	// Atributos
	public int numConta;
	protected String tipo;
	private String dono;
	private float saldo;
	private boolean status;
	
	// M�todos Personalizados
	public void estadoAtual() {
		System.out.println("*********************************");
		System.out.println("Conta: " + this.getNumConta());
		System.out.println("Tipo: " + this.getTipo());
		System.out.println("Dono: " + this.getDono());
		System.out.println("Saldo: " + this.getSaldo());
		System.out.println("Status: " + this.isStatus());
		System.out.println("*********************************");
	}
	
	public void abrirConta(String t) {
		this.setTipo(t);
		this.setStatus(true);
		
		if ("CC".equals(t)) {
			this.setSaldo(50);
			
		} else if ("CP".equals(t)) {
			
			this.setSaldo(150);
		}
		
		System.out.println("Conta aberta com sucesso!");
	}
	
	public void fecharConta() {
		
		if (this.getSaldo() > 0) {
			
			System.out.println("A conta n�o pode ser fechada porque ainda tem dinheiro.");
			
		} else if (this.getSaldo() < 0) { 
			
			System.out.println("A conta n�o pode ser fechada porque est� em d�bito.");
			
		} else {
			this.setStatus(false);
			System.out.println("Conta fechada com sucesso!");
		}
	}
	
	public void depositar(float v) {

		if (this.isStatus()) {
			
			this.setSaldo(this.getSaldo() + v);
			System.out.println("Dep�sito realizado na conta de " + this.getDono() + " no valor de " + v);
			
		} else {
			
			System.out.println("Imposs�vel depositar em uma conta fechada.");
		}
	}
	
	public void sacar(float v) {
		
		if (this.isStatus()) {
			if (this.getSaldo() >= v) {
				
				this.setSaldo(this.getSaldo() - v);
				System.out.println("Saque realizado na conta de " + this.getDono() + " no valor de " + v);
				
			} else {
				
				System.out.println("Saldo insuficiente.");
			}
			
		} else {
			
			System.out.println("Imposs�vel sacar de uma conta fechada.");
		}
	}
	
	public void pagarMensalidade() {
		int v = 0;
		if (this.getTipo() == "CC") {
			v = 12;
			
		} else if (this.getTipo() == "CP") {
			v = 20;			
			
		} 
		if (this.isStatus()) {
			this.setSaldo(this.getSaldo() - v);
			System.out.println("Mensalidade paga com sucesso por " + this.getDono());
			
		} else {
			System.out.println("Imposs�vel pagar mensalidade de uma conta fechada.");
		}
		
	}
		
	//M�todos Especiais
	public void Contabanco() {
		this.setSaldo(0);
		this.setStatus(false);
		
	}

	public int getNumConta() {
		return numConta;
	}

	public void setNumConta(int numConta) {
		this.numConta = numConta;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public String getDono() {
		return dono;
	}

	public void setDono(String dono) {
		this.dono = dono;
	}

	public float getSaldo() {
		return saldo;
	}

	public void setSaldo(float saldo) {
		this.saldo = saldo;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}
	
}
