package batalhadeemojis;

public class Principal {

	public static void main(String[] args) {
		
		Lutador l[] = new Lutador[6];
				
		l[0] = new Lutador("Pretty Boy", "Fran�a", 31, 1.75f, 68.9f, "Leve", 11, 2, 1);
		
		l[1] = new Lutador("Putscript", "Brasil", 29, 1.68f, 57.8f, "Leve", 14, 2, 3);
		
		l[2] = new Lutador("Snapshadow", "EUA", 35, 1.65f, 80.9f, "M�dio", 12, 2, 1); 
		
		l[3] = new Lutador("Dead Code", "Austr�lia", 28, 1.93f, 81.6f, "M�dio", 13, 0, 2);
		
		l[4] = new Lutador("UFOCobol", "Brasil", 37, 1.70f, 119.3f, "Pesado", 5, 4, 3);
		
		l[5] = new Lutador("Nerdaart", "Alemanha", 30, 1.81f, 105.7f, "Pesado", 12, 2, 4);

		//l[5].apresentar();
		
		
		Luta UEC01 = new Luta();
		UEC01.marcarLuta(l[4], l[5]);
		UEC01.lutar(); 
		
	}

}
