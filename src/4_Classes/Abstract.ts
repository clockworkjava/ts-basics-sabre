{
    // W TS są jeszcze klasy abstrakcyjny - czyli takie klasy, których intancji nie można tworzyć,
    // i które mogą posiadać metody abstrakcyjen - takie, któe muszą być zaimplementowane przez
    // klasy dziedziczace

    abstract class Abs {

        private a : number;

        //pomimo tego, że nie można ich tworzyć za pomocą new to wciąz mogą posiadać konsturktory
        constructor() {
            this.a = 3;
        }

        xx = () => {
            return 'xx'
        }

        abstract showInfo () : string;
    }

    // const x : Abs = new Abs();

    // musi zaimplementowac abstrakcje z AbS i musi to byc metoda publiczna
    class Cbs extends Abs {

        constructor() {
            super();
            console.log(`message`);
        }

        public showInfo() {
            return '';
        }

    }

    //Klasy abstrakcyjne sa bardzo zbliżone to interfejsów - w TS nawet bliżej niż w Javie,
    // jedyna różnica jest taka, że klasa abstrakcyjna może implementować już pewne rzeczy czy
    // nadawć konkretną wartość polom.


    // Zdeycodwanie bardziej popularne są interfejsy.
}