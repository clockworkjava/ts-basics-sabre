class Info {
    
  private name: string;
    private email: string;
    private preferences: string[];

    constructor(name: string, email: string) {
      this.name = name;
      this.email = email;
      this.preferences = [];
    }

    
    public toString = () => {
      return `${this.name} - ${this.email}`;
    };

    public setEmail(val : string) : void {
        this.email = val;
    }
    
    public getEmail() : string {
        return this.email;
    }

    public getPreferences() : string[] {
        return this.preferences;
    }
}

let i : Info = new Info('Pawel', 'cwik@cwik');

const pref : string[] = i.getPreferences();

pref.push('a');