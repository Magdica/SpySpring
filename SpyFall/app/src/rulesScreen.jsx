﻿import React from "react";
import ReactDOM from "react-dom";

export default class RulesScreen extends React.Component
{
	render()
	{
		return (
			<div>
				<h1>PRAVILA IGRE</h1>
				<p>
					Igra se sastoji od nekoliko kratkih rundi (broj rundi ovisi o dogovoru igrača). U svakoj rundi igrači se nađu na određenoj lokaciji s ulogom koja im je dodjeljena. Jedan igrač će uvijek biti špijun i neće znati na kojoj se lokaciji nalazi. Uloga špijuna je da pažljivo sluša, identificira lokaciju i ne otkrije svoj identitet. Ostali igrači moraju davati odgovore drugim igračima koji nisu preočiti, a daju do znanja da dotični zna na kojoj je lokaciji te na taj način dokaže da nije špijun.
				</p>

				<h2>PRAVILA</h2>
				<p>
					Igrač koji izgleda najsumnjivije počinje s postavljanjem pitanja i pokreće štopericu. U svakoj sljedećoj rundi tu ulogu preuzima igrač koji je bio špijun u posljednjoj rundi. Pitanja uobičajeno imaju veze s lokacijom, ali ne mora nužno biti tako. Pitanje je postavljeno jednom, a odgovor može biti u bilo kakvom obliku - nema dodatnih pitanja. Igrač kojem je postavljeno pitanje sljedeći postavlja pitanje, ali nije dopušteno pitati osobu koja mu je postavila pitanje. Igrač slobodno može odrediti koga će pitati ovisno o svojim dojmovima i sumnjama koje su stekli kad su čuli pitanja i odgovore drugih igrača. Uz lokaciju svaki igrač koji nije špijun će dobiti i ulogu vezanu za lokaciju. Igrači se prije početka igre moraju dogovoriti hoće li referencirati uloge koje su im dodjeljene ili će igrati ignorirajući ih i fokusirati se samo na lokaciju.
				</p>

				<h2>KRAJ RUNDE I BODOVANJE</h2>
				<p>
					Igrači se mogu dogovoriti o trajanju runde. Odlučite koliko će runda trajati prije početka igre. Ako vam je igra nova ili igrate prvi put odlučite se za duže runde otprilike 12 - 15 minuta. Što ste iskusniji trajanje runde može biti kraće da bi se povečao izazov.<br />Runda završava kad se dogodi neka od sljedeće tri stvari:
				</p>

				<h3>1. Prošlo je vrijeme određeno za rundu (npr. 8 minuta)</h3>
				<p>
					Kad vrijeme istekne, svaki igrač, počevši s igračem koji je prvi počeo (pokrenuo štopericu i pitao prvo pitanje) odabire osobu i optužuje ju kao špijuna. Nakon prijedloga jedne osobe svi mogu diskutirati svoje sumnje i iznositi mišljenja. Ako se svi slože oko iste osobe ta osoba mora otkriti svoj identitet. Ako je uistinu bila špijun pobijeđuju svi osim te osobe i osvajaju po jedan bod, pritom osoba koja je inicirala glasovanje za tu osobu osvaja još jedan dodatan bod. Ako optužena osoba nije bila špijun - špijun pobijeđuje i osvaja 4 boda. Ako se igrači ne uspiju jednoglasno dogovoriti sljedeća osoba (u smjeru kazaljke na satu) ima pravo predložiti špijuna i zatim se opet može diskutirati. Ovo se nastavlja dok se ne postigne jednoglasna odluka. A ako se ne postigne do kraja - špijun pobijeđuje i osvaja 2 boda. Igrač koji je predložen kao špijun i o kojem se diskutira nema pravo glasanja.
				</p>

				<h3>2. Netko od igrađa posumnja</h3>
				<p>
					Svaki igrač jednom tijekom igre može zaustaviti vrijeme i izraziti sumnju na špijuna te tražiti ostale (osim osumnjičenoga) da glasaju. Ako se svi slože igra završava i otkriva se identitet osumnjičenog. Ako se ne glasa jednoglasno vrijeme se ponovno pokreće i igra nastavlja. Igrač koji je izrazio sumnju to više ne smije ponoviti do kraja runde. Špijun također smije koristiti ovu mogućnost kako bi odvratio sumnju sa sebe. Osoba koju se osumnjiči može biti ponovno osumnjičena od strane drugog igrača. Zapazite: Tijekom glasanja ne bi trebalo biti diskusije. Jer bi argumenti mogli koristiti špijunu da otkrije lokaciju.
				</p>

				<h3>3. Na zahtjev špijuna</h3>
				<p>
					Ako vrijeme nije već zaustavljeno od strane nekog drugog igrača i nije prošlo vrijeme određeno za rundu, špijun može zaustaviti vrijeme na način da otkrije drugima da je on špijun (pokazivanjem ekrana). Špijun može tada pokušati identificirati lokaciju - pritom se smije služiti popisom lokacija. Špijun pobijeđuje ako pogodi lokaciju i na taj način osvaja 4 boda. U suprotnom pobijeđuju ostali igrači i osvajaju po jedan bod.
				</p>
			</div>
		);
	}
}