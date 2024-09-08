#Moment 3.2 del 1 i kursen DT207g

##Sammanfattning
En REST-webbtjänst som är utvecklad med NodeJS, Express och MongoDB. Applikationen haterar arbetserfarenheter. Den haterar CRUD-operatiner och input valideras om information saknas med tydliga felmeddelanden. 

##Installation av databas
För att installera, klona källkodsfiler och kör därefter npm install för att installera nödvändiga paket. Se till att du har MongoDB installerat och kör igång på localhost:27017 (eller justera anslutningssträngen i koden om nödvändigt). Starta sedan servern npm run start om inget annat an ges  kommer servern starta på localhost/3010.

##Användning CURD
Nedan finns beskrivet hur man använder webbtjänsten på olika vis:
| Metod         | Ändpunkt                 | Beskrivning      |
| ------------- |:------------------------:| ----------------:|
| GET           | /workexperience          | Hämtar alla tillgängliga arbetserfarenheter. |
| GET           | /workexperience/ID       |   	Hämtar en specifik arbetserfarenhet med angivet ID. |
| POST          | /workexperience     |    Lagrar en ny arbetserafarenhet. Kräver att ett objekt skickas med. |
| PUT           | /workexperience/ID     |    Uppdaterar en existerande arbetserfarenhet med angivet ID. Kräver att ett bjekt skickas med. |
| DELETE        | /workexperience/ID     |    Raderar en arbetserfarenhet med angivet ID. |


Ett objekt skickas som jJSON med följande struktur:
{
  "companyname": "Företagsnamn",
  "jobtitle": "Jobbtitel",
  "location": "Plats",
  "startdate": "YYYY-MM-DD",
  "enddate": "YYYY-MM-DD",
  "description": "Kort beskrivning av arbetsuppgifterna"
}

###Utvecklad av
Sabina Liljeström
