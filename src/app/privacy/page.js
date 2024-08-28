import React from 'react';
import { NextUIProvider } from "@nextui-org/react";
import Navbar from '@/components/Navbar';

const App = () => {
    return (
    <NextUIProvider>
    <div className="App">
        <Navbar />
        <div className="text-center max-w-[1000px] mx-5 sm:mx-4 lg:mx-auto">
            <h2 className="font-bold text-2xl text-center my-7">Kim jesteśmy</h2>
            <p>Adres naszej strony internetowej to: http://hub.itvt.pl</p>
            <h2 className="font-bold text-2xl text-center my-7">Media</h2>
            <p>Podczas odtwarzania filmu, na twój komputer mogą być pobierane i wysyłane dodatkowe dane</p>
            <h2 className="font-bold text-2xl text-center my-7">Ciasteczka</h2>
            <p>Przeglądarka może wykorzystywać pliki Cookie, do prawidłowego wyświetlania filmu</p>
            <h2 className="font-bold text-2xl text-center my-7">Osadzone treści z innych witryn</h2>
            <p>Elementy na stronie mogą zawierać osadzone treści (np. filmy, obrazki, artykuły itp.). Osadzone treści z innych witryn zachowują się analogicznie do tego, jakby użytkownik odwiedził bezpośrednio konkretną witrynę.</p>
            <p>Witryny mogą zbierać informacje o tobie, używać ciasteczek, dołączać dodatkowe, zewnętrzne systemy śledzenia i monitorować twoje interakcje z osadzonym materiałem, włączając w to śledzenie twoich interakcji z osadzonym materiałem jeśli posiadasz konto i jesteś zalogowany w tamtej witrynie.</p>
            <h2 className="font-bold text-2xl text-center my-7">Jak długo przechowujemy twoje dane</h2>
            <p>Jeśli zostawisz komentarz lub napiszesz wiadomość email, treść i metadane będą przechowywane przez czas nieokreślony. Dzięki temu możemy łatwo odpowiedzieć na twoją wiadomość.</p>
            <p>Dla użytkowników którzy zarejestrowali się na naszej stronie internetowej (jeśli tacy są), przechowujemy również informacje osobiste wprowadzone w profilu. Każdy użytkownik może dokonać wglądu, korekty albo skasować swoje informacje osobiste w dowolnej chwili (nie licząc nazwy użytkownika, której nie można zmienić). Administratorzy strony również mogą przeglądać i modyfikować te informacje.</p>
            <h2 className="font-bold text-2xl text-center my-7">Jakie masz prawa do swoich danych</h2>
            <p>Jeśli masz konto użytkownika albo wysłałeś wiadomość poprzez formularz czy email, możesz zażądać dostarczenia pliku z wyeksportowanym kompletem twoich danych osobistych będących w naszym posiadaniu, w tym całość tych dostarczonych przez ciebie. Możesz również zażądać usunięcia przez nas całości twoich danych osobistych w naszym posiadaniu. Nie dotyczy to żadnych danych które jesteśmy zobligowani zachować ze względów administracyjnych, prawnych albo bezpieczeństwa.</p>
            <h2 className="font-bold text-2xl text-center my-7">Gdzie wysłamy twoje dane</h2>
            <p>Twoje informacje takie jak Adres IP, czy Wersja Systemu oraz przeglądarki, mogą zostać wysłane do administratora strony w celu optymalizacji i stabilności w działaniu strony.</p>
        </div>
    </div>
    </NextUIProvider>
    );
};
export default App;