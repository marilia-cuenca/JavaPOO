package projetolivro;

public class Pessoa {

	private String nome;
	private int idade;
	private String sexo;
	
	public void fazerAnivers�rio() {
		
		this.idade++;
	}
	
	public Pessoa(String nome, int idade, String sexo) {
		super();
		this.nome = nome;
		this.idade = idade;
		this.sexo = sexo;
	}


	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public int getIdade() {
		return idade;
	}

	public void setIdade(int idade) {
		this.idade = idade;
	}

	public String getSexo() {
		return sexo;
	}

	public void setSexo(String sexo) {
		this.sexo = sexo;
	}

	public void titulo() {
		
		
	}

	public void autor() {
		// TODO Auto-generated method stub
		
	}

	public void totalPaginas() {
		// TODO Auto-generated method stub
		
	}

	public void paginaAtual() {
		// TODO Auto-generated method stub
		
	}

	public void aberto() {
		// TODO Auto-generated method stub
		
	}

	public void leitor() {
		// TODO Auto-generated method stub
		
	}
	
	
	
}
