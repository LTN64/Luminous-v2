import{initializeApp}from"\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0077\u0077\u0077\u002E\u0067\u0073\u0074\u0061\u0074\u0069\u0063\u002E\u0063\u006F\u006D\u002F\u0066\u0069\u0072\u0065\u0062\u0061\u0073\u0065\u006A\u0073\u002F\u0031\u0030\u002E\u0031\u0031\u002E\u0031\u002F\u0066\u0069\u0072\u0065\u0062\u0061\u0073\u0065\u002D\u0061\u0070\u0070\u002E\u006A\u0073";import{getFirestore,collection,query,where,getDoc,getDocs,updateDoc,doc,addDoc}from"\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0077\u0077\u0077\u002E\u0067\u0073\u0074\u0061\u0074\u0069\u0063\u002E\u0063\u006F\u006D\u002F\u0066\u0069\u0072\u0065\u0062\u0061\u0073\u0065\u006A\u0073\u002F\u0031\u0030\u002E\u0031\u0031\u002E\u0031\u002F\u0066\u0069\u0072\u0065\u0062\u0061\u0073\u0065\u002D\u0066\u0069\u0072\u0065\u0073\u0074\u006F\u0072\u0065\u002E\u006A\u0073";import{getAuth,onAuthStateChanged}from"\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0077\u0077\u0077\u002E\u0067\u0073\u0074\u0061\u0074\u0069\u0063\u002E\u0063\u006F\u006D\u002F\u0066\u0069\u0072\u0065\u0062\u0061\u0073\u0065\u006A\u0073\u002F\u0031\u0030\u002E\u0031\u0031\u002E\u0031\u002F\u0066\u0069\u0072\u0065\u0062\u0061\u0073\u0065\u002D\u0061\u0075\u0074\u0068\u002E\u006A\u0073";var _0x0bb43f=(516488^516493)+(804880^804885);const firebaseConfig={'\u0061\u0070\u0069\u004B\u0065\u0079':"\u0041\u0049\u007A\u0061\u0053\u0079\u0043\u0041\u005A\u0034\u002D\u0030\u0052\u0078\u0066\u0044\u0076\u0062\u0056\u0039\u004A\u0039\u0063\u0054\u0057\u004B\u0051\u0075\u0052\u0041\u0033\u0062\u0063\u0066\u0074\u0030\u002D\u0052\u0030","authDomain":"\u006C\u0075\u006D\u0069\u006E\u006F\u0075\u0073\u002D\u0032\u0039\u0038\u0065\u0063\u002E\u0066\u0069\u0072\u0065\u0062\u0061\u0073\u0065\u0061\u0070\u0070\u002E\u0063\u006F\u006D",'\u0070\u0072\u006F\u006A\u0065\u0063\u0074\u0049\u0064':"\u006C\u0075\u006D\u0069\u006E\u006F\u0075\u0073\u002D\u0032\u0039\u0038\u0065\u0063",'\u0073\u0074\u006F\u0072\u0061\u0067\u0065\u0042\u0075\u0063\u006B\u0065\u0074':"luminous-298ec.firebasestorage.app","messagingSenderId":"\u0032\u0032\u0033\u0031\u0038\u0037\u0035\u0030\u0031\u0032\u0039",'\u0061\u0070\u0070\u0049\u0064':"\u0031\u003A\u0032\u0032\u0033\u0031\u0038\u0037\u0035\u0030\u0031\u0032\u0039\u003A\u0077\u0065\u0062\u003A\u0039\u0036\u0034\u0032\u0061\u0032\u0061\u0065\u0062\u0062\u0061\u0039\u0038\u0031\u0035\u0031\u0032\u0033\u0038\u0035\u0039\u0030"};_0x0bb43f='\u0067\u006E\u006F\u0062\u006C\u006A';const app=initializeApp(firebaseConfig);var _0x4b69d=(960539^960539)+(627040^627047);const db=getFirestore(app);_0x4b69d=(151874^151874)+(319455^319449);const auth=getAuth(app);async function submitVipKey(_0x4g_0xebc){var _0xa3f7fe=(709040^709045)+(299024^299027);const _0xaeadd=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0076\u0069\u0070\u004B\u0065\u0079\u0049\u006E\u0070\u0075\u0074")['\u0076\u0061\u006C\u0075\u0065']['\u0074\u0072\u0069\u006D']();_0xa3f7fe=193271^193269;const _0x2_0x0b4=auth['\u0063\u0075\u0072\u0072\u0065\u006E\u0074\u0055\u0073\u0065\u0072']?.uid;const _0xe_0x694=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0074\u0061\u0074\u0075\u0073\u004D\u0065\u0073\u0073\u0061\u0067\u0065");_0x4g_0xebc=(581153^581156)+(396777^396779);if(!_0x2_0x0b4){_0xe_0x694['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']="\u0059\u006F\u0075\u0020\u006E\u0065\u0065\u0064\u0020\u0074\u006F\u0020\u0062\u0065\u0020\u006C\u006F\u0067\u0067\u0065\u0064\u0020\u0069\u006E\u0020\u0074\u006F\u0020\u0063\u006C\u0061\u0069\u006D\u0020\u0061\u0020\u0056\u0049\u0050\u0020\u006B\u0065\u0079\u002E";_0xe_0x694['\u0073\u0074\u0079\u006C\u0065']['\u0063\u006F\u006C\u006F\u0072']="der".split("").reverse().join("");return;}if(!_0xaeadd){_0xe_0x694['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']="\u0050\u006C\u0065\u0061\u0073\u0065\u0020\u0065\u006E\u0074\u0065\u0072\u0020\u0061\u0020\u0056\u0049\u0050\u0020\u006B\u0065\u0079\u002E";_0xe_0x694['\u0073\u0074\u0079\u006C\u0065']['\u0063\u006F\u006C\u006F\u0072']="\u0072\u0065\u0064";return;}try{var _0xeade=(866407^866404)+(429961^429962);const _0xe5d25c=collection(db,"syek".split("").reverse().join(""));_0xeade=(596925^596925)+(806453^806452);var _0x54260e=(976390^976384)+(682442^682440);const _0x18f=query(_0xe5d25c,where("\u006B\u0065\u0079","\u003D\u003D",_0xaeadd));_0x54260e=905709^905707;var _0xdc_0x022=(477892^477888)+(735809^735815);const _0x19d94f=await getDocs(_0x18f);_0xdc_0x022=176269^176264;if(_0x19d94f['\u0065\u006D\u0070\u0074\u0079']){_0xe_0x694['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=".yek PIV dilavnI".split("").reverse().join("");_0xe_0x694['\u0073\u0074\u0079\u006C\u0065']['\u0063\u006F\u006C\u006F\u0072']="\u0072\u0065\u0064";return;}var _0x086fd=(292518^292515)+(141657^141658);const _0xd_0xcfa=_0x19d94f['\u0064\u006F\u0063\u0073'][431961^431961];_0x086fd=(176948^176950)+(593884^593876);const _0x413c=_0xd_0xcfa['\u0064\u0061\u0074\u0061']();if(_0x413c['\u0069\u0073\u0055\u0073\u0065\u0064']===!![]){_0xe_0x694['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']="\u0054\u0068\u0069\u0073\u0020\u006B\u0065\u0079\u0020\u0068\u0061\u0073\u0020\u0061\u006C\u0072\u0065\u0061\u0064\u0079\u0020\u0062\u0065\u0065\u006E\u0020\u0075\u0073\u0065\u0064\u002E";_0xe_0x694['\u0073\u0074\u0079\u006C\u0065']['\u0063\u006F\u006C\u006F\u0072']="der".split("").reverse().join("");}else{await updateDoc(_0xd_0xcfa['\u0072\u0065\u0066'],{'\u0069\u0073\u0055\u0073\u0065\u0064':!![]});var _0x55bf=(933190^933191)+(985972^985980);const _0x1c56a=doc(db,"sresu".split("").reverse().join(""),_0x2_0x0b4);_0x55bf="kcpmki".split("").reverse().join("");await updateDoc(_0x1c56a,{'\u0076\u0069\u0070\u0053\u0074\u0061\u0074\u0075\u0073':!![]});_0xe_0x694['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=".PIV a won era uoY !snoitalutargnoC".split("").reverse().join("");_0xe_0x694['\u0073\u0074\u0079\u006C\u0065']['\u0063\u006F\u006C\u006F\u0072']="\u0067\u0072\u0065\u0065\u006E";}}catch(error){console['\u0065\u0072\u0072\u006F\u0072']("\u0045\u0072\u0072\u006F\u0072\u0020\u0073\u0075\u0062\u006D\u0069\u0074\u0074\u0069\u006E\u0067\u0020\u0056\u0049\u0050\u0020\u006B\u0065\u0079\u003A",error);_0xe_0x694['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=".niaga yrt esaelP .derrucco rorre nA".split("").reverse().join("");_0xe_0x694['\u0073\u0074\u0079\u006C\u0065']['\u0063\u006F\u006C\u006F\u0072']="\u0072\u0065\u0064";}}document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("nottuByeKpiVtimbus".split("").reverse().join(""))['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u006C\u0069\u0063\u006B",submitVipKey);onAuthStateChanged(auth,user=>{if(user){let _0x24b7e;const userRef=doc(db,"\u0075\u0073\u0065\u0072\u0073",user['\u0075\u0069\u0064']);_0x24b7e='\u006C\u006A\u0066\u0069\u006E\u006E';getDoc(userRef)['\u0074\u0068\u0065\u006E'](docSnap=>{let _0xa9ac3e;const statusMessage=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("egasseMsutats".split("").reverse().join(""));_0xa9ac3e=455708^455710;if(docSnap['\u0065\u0078\u0069\u0073\u0074\u0073']()&&docSnap['\u0064\u0061\u0074\u0061']()['\u0061\u0064\u006D\u0069\u006E']===!![]){document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("yek-piv-etareneg".split("").reverse().join(""))['\u0064\u0069\u0073\u0061\u0062\u006C\u0065\u0064']=false;document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("yek-piv-etareneg".split("").reverse().join(""))['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u006C\u0069\u0063\u006B",()=>{const vipKey=generateVIPKey();document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0076\u0069\u0070\u002D\u006B\u0065\u0079")['\u0076\u0061\u006C\u0075\u0065']=vipKey;var _0x_0xe49=(316330^316333)+(412919^412913);const keysCollection=collection(db,"syek".split("").reverse().join(""));_0x_0xe49=(675603^675607)+(808585^808588);addDoc(keysCollection,{'\u006B\u0065\u0079':vipKey,'\u0069\u0073\u0055\u0073\u0065\u0064':false,"createdAt":new Date()})['\u0074\u0068\u0065\u006E'](()=>{statusMessage['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']="\u0056\u0049\u0050\u0020\u006B\u0065\u0079\u0020\u0073\u0075\u0063\u0063\u0065\u0073\u0073\u0066\u0075\u006C\u006C\u0079\u0020\u0063\u0072\u0065\u0061\u0074\u0065\u0064";statusMessage['\u0073\u0074\u0079\u006C\u0065']['\u0063\u006F\u006C\u006F\u0072']="\u0067\u0072\u0065\u0065\u006E";})['\u0063\u0061\u0074\u0063\u0068'](error=>{statusMessage['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=":yek PIV gnitaerc rorrE".split("").reverse().join(""),error;statusMessage['\u0073\u0074\u0079\u006C\u0065']['\u0063\u006F\u006C\u006F\u0072']="\u0067\u0072\u0065\u0065\u006E";});});}else{statusMessage['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']="\u0059\u006F\u0075\u0020\u0064\u006F\u0020\u006E\u006F\u0074\u0020\u0068\u0061\u0076\u0065\u0020\u0070\u0065\u0072\u006D\u0069\u0073\u0073\u0069\u006F\u006E\u0020\u0074\u006F\u0020\u0067\u0065\u006E\u0065\u0072\u0061\u0074\u0065\u0020\u0020\u006B\u0065\u0079\u0073\u002E";statusMessage['\u0073\u0074\u0079\u006C\u0065']['\u0063\u006F\u006C\u006F\u0072']="der".split("").reverse().join("");}})['\u0063\u0061\u0074\u0063\u0068'](error=>{statusMessage['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']="derucco rorre nA".split("").reverse().join(""),error;statusMessage['\u0073\u0074\u0079\u006C\u0065']['\u0063\u006F\u006C\u006F\u0072']="\u0072\u0065\u0064";});}});function generateVIPKey(){return"\u0056\u0049\u0050\u002D"+Math['\u0072\u0061\u006E\u0064\u006F\u006D']()['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067'](774731^774767)['\u0073\u0075\u0062\u0073\u0074\u0072\u0069\u006E\u0067'](622632^622634,992073^992080)['\u0074\u006F\u0055\u0070\u0070\u0065\u0072\u0043\u0061\u0073\u0065']();}
