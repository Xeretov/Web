# BIG Business - Sito Web Aziendale

Benvenuti nel sito ufficiale di **BIG Business**! Siamo una compagnia leader nella fornitura di soluzioni innovative e servizi di alta qualità per le aziende di tutto il mondo.

## Funzionalità:
- **Home**: Presentazione della missione dell'azienda, dei dipendenti, dei servizi e delle testimonianze dei clienti.
- **News**: Rimanere aggiornati con le ultime notizie e gli annunci di BIG Business.
- **Employees**: Visualizza un elenco dei dipendenti e dei loro ruoli all'interno dell'azienda.
- **About**: Scopri di più sulla missione, i valori e le informazioni di contatto dell'azienda.
- **Navbar**: Navigazione facile tra le pagine con un layout responsivo (versione espansa per desktop e versione con hamburger per dispositivi mobili).

---

## Come avviare il progetto

Per eseguire il progetto in locale, segui i passaggi riportati di seguito.

### 1. Configurazione Front-end

Il front-end è costruito con **React**. Segui questi passaggi per iniziare:

#### Passaggio 1: Installa le dipendenze
Nella cartella del front-end (`front-end`), installa le dipendenze richieste utilizzando **npm**:
```bash
npm install
```
#### Passaggio 2: Avvia il server di sviluppo
Una volta installate le dipendenze, avvia il server di sviluppo per visualizzare l'applicazione nel browser:
```bash
npm run dev
```
Il front-end sarà ora accessibile sul link mostrato sul terminale.

---

### 2. Configurazione Back-end (Flask)

Il back-end è costruito con **Flask** (Python) per gestire le richieste API e interagire con un database.

#### Passaggio 1: Installa le dipendenze
Assicurati di avere **Python 3** installato e poi installa le dipendenze richieste utilizzando **pip**:
```bash
pip install -r requirements.txt
```
#### Passaggio 2: Avvia il server Flask
Avvia il server del back-end eseguendo il comando seguente nella cartella del back-end:
```bash
python3 python_server.py
```
Il server Flask sarà ora in esecuzione su `http://localhost:8085` e fornirà i dati al front-end. <br>
> [!WARNING]
>
> Assicurati di eseguire il server Flask in una finestra separata dal front-end e che sia rivolta alla porta 8085.
---

## Panoramica delle Pagine

### 1. **Home Page (Pagina Principale)**

La **Home Page** è la pagina di atterraggio principale del sito. Introduce l'azienda, i suoi servizi, i dipendenti e include testimonianze di clienti.

- **Sezione Dipendenti**: Vengono mostrati i membri chiave del team, tra cui John Smith (CEO), Robert Williams (CTO) e Lisa Brown (COO). Vengono visualizzate le loro foto, ruoli e brevi biografie.
- **Sezione Servizi**: Vengono elencati i servizi offerti da BIG Business, come consulenza, sviluppo e marketing, con icone e descrizioni pertinenti.
- **Sezione Testimonianze**: Un carosello visualizza i feedback e le testimonianze dei clienti, fornendo una prova sociale del successo dell'azienda.
- **Call to Action**: Un pulsante "Get Started Now" (Inizia ora) incoraggia i visitatori a mettersi in contatto con BIG Business e iniziare a lavorare insieme.

### 2. **Pagina News**
La **News Page** visualizza le ultime notizie e gli annunci di BIG Business. I dati vengono recuperati dal **back-end Flask**, che estrae le informazioni da un database SQL.

Le notizie vengono visualizzate in una griglia, con titolo, data, descrizione di ciascun articolo di notizia.

### 3. **Pagina Employees**
La **Employees Page** mostra un elenco di dipendenti, cognome e nome, i loro ruoli all'interno dell'azienda e lo stipendio annuo. I dati sui dipendenti sono forniti dal back-end e il front-end li visualizza in una tale.

### 4. **Pagina About**
La **About Page** spiega la missione e i valori di BIG Business e fornisce le informazioni di contatto.

---
## Funzionalità
### 1. Navbar
La **Navbar** è una barra di navigazione responsiva che consente agli utenti di navigare tra le diverse pagine (Home, News, About, Employees). Si adatta automaticamente in base alla dimensione dello schermo (versione espansa per desktop e versione con hamburger per dispositivi mobili).

### 2. Employees table
La tabella dei dipendenti può essere ordinata cliccando sulle varie colonne.
Si possono anche filtrare i dipendenti per nome, cognome e ruolo.
