import{initializeApp}from"\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0077\u0077\u0077\u002E\u0067\u0073\u0074\u0061\u0074\u0069\u0063\u002E\u0063\u006F\u006D\u002F\u0066\u0069\u0072\u0065\u0062\u0061\u0073\u0065\u006A\u0073\u002F\u0031\u0030\u002E\u0031\u0031\u002E\u0031\u002F\u0066\u0069\u0072\u0065\u0062\u0061\u0073\u0065\u002D\u0061\u0070\u0070\u002E\u006A\u0073";import{getAuth,onAuthStateChanged,signOut}from"\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0077\u0077\u0077\u002E\u0067\u0073\u0074\u0061\u0074\u0069\u0063\u002E\u0063\u006F\u006D\u002F\u0066\u0069\u0072\u0065\u0062\u0061\u0073\u0065\u006A\u0073\u002F\u0031\u0030\u002E\u0031\u0031\u002E\u0031\u002F\u0066\u0069\u0072\u0065\u0062\u0061\u0073\u0065\u002D\u0061\u0075\u0074\u0068\u002E\u006A\u0073";import{getFirestore,getDoc,doc,updateDoc,setDoc}from"\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0077\u0077\u0077\u002E\u0067\u0073\u0074\u0061\u0074\u0069\u0063\u002E\u0063\u006F\u006D\u002F\u0066\u0069\u0072\u0065\u0062\u0061\u0073\u0065\u006A\u0073\u002F\u0031\u0030\u002E\u0031\u0031\u002E\u0031\u002F\u0066\u0069\u0072\u0065\u0062\u0061\u0073\u0065\u002D\u0066\u0069\u0072\u0065\u0073\u0074\u006F\u0072\u0065\u002E\u006A\u0073";let _0x689ebf;const firebaseConfig={'\u0061\u0070\u0069\u004B\u0065\u0079':"\u0041\u0049\u007A\u0061\u0053\u0079\u0043\u0041\u005A\u0034\u002D\u0030\u0052\u0078\u0066\u0044\u0076\u0062\u0056\u0039\u004A\u0039\u0063\u0054\u0057\u004B\u0051\u0075\u0052\u0041\u0033\u0062\u0063\u0066\u0074\u0030\u002D\u0052\u0030",'\u0061\u0075\u0074\u0068\u0044\u006F\u006D\u0061\u0069\u006E':"\u006C\u0075\u006D\u0069\u006E\u006F\u0075\u0073\u002D\u0032\u0039\u0038\u0065\u0063\u002E\u0066\u0069\u0072\u0065\u0062\u0061\u0073\u0065\u0061\u0070\u0070\u002E\u0063\u006F\u006D","projectId":"\u006C\u0075\u006D\u0069\u006E\u006F\u0075\u0073\u002D\u0032\u0039\u0038\u0065\u0063",'\u0073\u0074\u006F\u0072\u0061\u0067\u0065\u0042\u0075\u0063\u006B\u0065\u0074':"luminous-298ec.firebasestorage.app","messagingSenderId":"22318750129",'\u0061\u0070\u0070\u0049\u0064':"1:22318750129:web:9642a2aebba98151238590"};_0x689ebf=(779436^779432)+(182744^182749);const app=initializeApp(firebaseConfig);const db=getFirestore(app);const auth=getAuth(app);onAuthStateChanged(auth,user=>{if(user){document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0063\u0075\u0072\u0072\u0065\u006E\u0074\u0045\u006D\u0061\u0069\u006C")['\u0076\u0061\u006C\u0075\u0065']=user['\u0065\u006D\u0061\u0069\u006C'];}else{document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("liamEtnerruc".split("").reverse().join(""))['\u0076\u0061\u006C\u0075\u0065']="\u004E\u006F\u0020\u0075\u0073\u0065\u0072\u0020\u0066\u006F\u0075\u006E\u0064";}});const logoutButton=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u006C\u006F\u0067\u006F\u0075\u0074");logoutButton['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("kcilc".split("").reverse().join(""),event=>{event['\u0070\u0072\u0065\u0076\u0065\u006E\u0074\u0044\u0065\u0066\u0061\u0075\u006C\u0074']();signOut(auth)['\u0074\u0068\u0065\u006E'](()=>{window['\u006C\u006F\u0063\u0061\u0074\u0069\u006F\u006E']['\u0068\u0072\u0065\u0066']="lmth.nigol".split("").reverse().join("");})['\u0063\u0061\u0074\u0063\u0068'](error=>{console['\u0065\u0072\u0072\u006F\u0072'](" :tuo gningis rorrE".split("").reverse().join(""),error);});});let _0xe_0x39b;const inputField=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u006E\u0065\u0077\u002D\u0075\u0073\u0065\u0072\u006E\u0061\u006D\u0065");_0xe_0x39b=636910^636910;let _0x33cd;const button=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0063\u0068\u0061\u006E\u0067\u0065\u002D\u0075\u0073\u0065\u0072\u006E\u0061\u006D\u0065\u002D\u0062\u0074\u006E");_0x33cd="cfiedm".split("").reverse().join("");let _0xc_0xbea;const message=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0074\u0061\u0074\u0075\u0073\u004D\u0065\u0073\u0073\u0061\u0067\u0065\u0032");_0xc_0xbea=471058^471060;button['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("kcilc".split("").reverse().join(""),async()=>{var _0xde5eec=(573941^573948)+(935468^935467);const newUsername=inputField['\u0076\u0061\u006C\u0075\u0065']['\u0074\u0072\u0069\u006D']();_0xde5eec="hqenbb".split("").reverse().join("");if(!newUsername){message['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=".ytpme eb tonnac emanresU".split("").reverse().join("");return;}try{const user=auth['\u0063\u0075\u0072\u0072\u0065\u006E\u0074\u0055\u0073\u0065\u0072'];if(!user){message['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']="\u0077\u006F\u006F\u0068\u006F\u006F\u0020\u0079\u006F\u0075\u0020\u0068\u0061\u0063\u006B\u0065\u0064\u0020\u006D\u0079\u0020\u0077\u0065\u0062\u0073\u0069\u0074\u0065\u0020\u0063\u006F\u006E\u0067\u0072\u0061\u0074\u0073";return;}var _0x979b3b=(142527^142527)+(460335^460331);const userDocRef=doc(db,"\u0075\u0073\u0065\u0072\u0073",user['\u0075\u0069\u0064']);_0x979b3b="ihefil".split("").reverse().join("");await updateDoc(userDocRef,{"username":newUsername});message['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']="\u0055\u0073\u0065\u0072\u006E\u0061\u006D\u0065\u0020\u0063\u0068\u0061\u006E\u0067\u0065\u0064\u0020\u0073\u0075\u0063\u0063\u0065\u0073\u0073\u0066\u0075\u006C\u006C\u0079\u0021";message['\u0073\u0074\u0079\u006C\u0065']['\u0063\u006F\u006C\u006F\u0072']="\u0067\u0072\u0065\u0065\u006E";}catch(error){message['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']="sretcarahc ro sdrow detibihorp sniatnoc emanresu ruoY".split("").reverse().join("");message['\u0073\u0074\u0079\u006C\u0065']['\u0063\u006F\u006C\u006F\u0072']="\u0072\u0065\u0064";}});
