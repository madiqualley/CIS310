(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[46],{LAVe:function(e,r,o){"use strict"
var t=o("FIFq")
var s=o.n(t)
var u=o("zQrl")
var l=function(e,r){for(var o in r)n.call(r,o)&&(e[o]=r[o])
function t(){this.constructor=e}t.prototype=r.prototype
e.prototype=new t
e.__super__=r.prototype
return e},n={}.hasOwnProperty
r["a"]=function(e){l(r,e)
function r(){return r.__super__.constructor.apply(this,arguments)}r.prototype.modelType="group"
r.prototype.resourceName="groups"
r.prototype.initialize=function(e,o){r.__super__.initialize.apply(this,arguments)
return this.newAndEmpty=null!=o?o.newAndEmpty:void 0}
r.prototype.users=function(){var e,r,o,t
e=this.newAndEmpty?[]:null
this._users=new u["a"](e,{group:this,category:null!=(r=this.collection)?r.category:void 0,markInactiveStudents:null!=(o=this.collection)&&null!=(t=o.options)?t.markInactiveStudents:void 0})
this._users.on("fetched:last",(s=this,function(){return s.set("members_count",s._users.length)}))
var s
this.users=function(){return this._users}
return this._users}
r.prototype.usersCount=function(){return this.get("members_count")}
r.prototype.sync=function(e,r,o){null==o&&(o={})
o.url=this.urlFor(e)
return s.a.sync(e,r,o)}
r.prototype.urlFor=function(e){return"create"===e?"/api/v1/group_categories/"+this.get("group_category_id")+"/groups":"/api/v1/groups/"+this.id}
r.prototype.theLimit=function(){var e,r,o
e=this.get("max_membership")
return e||(null!=(r=this.collection)&&null!=(o=r.category)?o.get("group_limit"):void 0)}
r.prototype.isFull=function(){var e
e=this.get("max_membership")
return!e&&this.groupCategoryLimitMet()||e&&this.get("members_count")>=e}
r.prototype.groupCategoryLimitMet=function(){var e,r,o
e=null!=(r=this.collection)&&null!=(o=r.category)?o.get("group_limit"):void 0
return e&&this.get("members_count")>=e}
r.prototype.isLocked=function(){var e,r
return null!=(e=this.collection)&&null!=(r=e.category)?r.isLocked():void 0}
r.prototype.toJSON=function(){var e
if(ENV.student_mode)return{name:this.get("name")}
e=r.__super__.toJSON.apply(this,arguments)
e.isFull=this.isFull()
return e}
return r}(s.a.Model)},Ou09:function(e,r,o){"use strict"
var t=o("pQTu")
var s=o("m0r6")
Object(s["a"])(JSON.parse('{"ar":{"this_course_has_concluded_7995a84c":"تم إنهاء هذا المساق","user":{"errors":{"already_enrolled":"أنت مسجل بالفعل في هذا المساق","course_full":"هذا المساق مكتمل","invalid_code":"كود غير صالح","required":"مطلوب","terms":"يجب أن توافق على الشروط","too_long":"يتعذر تجاوز %{max} حرفًَا"}}},"ca":{"this_course_has_concluded_7995a84c":"Aquest curs ha finalitzat","user":{"errors":{"already_enrolled":"Ja esteu inscrit en aquest curs","course_full":"Aquest curs és ple","invalid_code":"Codi no vàlid","required":"Obligatori","terms":"Heu d\'acceptar les condicions","too_long":"No pot tenir més de %{max} caràcters"}}},"cy":{"this_course_has_concluded_7995a84c":"Mae’r cwrs hwn wedi dod i ben","user":{"errors":{"already_enrolled":"Rydych chi wedi ymrestru’n barod ar y cwrs hwn","course_full":"Mae’r cwrs hwn yn llawn","invalid_code":"Cod annilys","required":"Gofynnol","terms":"Mae’n rhaid i chi gytuno â’r telerau","too_long":"Ddim yn cael bod yn fwy na %{max} nod"}}},"da":{"this_course_has_concluded_7995a84c":"Dette fag er afsluttet","user":{"errors":{"already_enrolled":"Du er allerede tilmeldt dette fag","course_full":"Dette kursus er fyldt","invalid_code":"Ugyldig kode","required":"Påkrævet","terms":"Du skal acceptere betingelserne","too_long":"Kan ikke overskride %{max} tegn"}}},"da-x-k12":{"this_course_has_concluded_7995a84c":"Dette fag er afsluttet","user":{"errors":{"already_enrolled":"Du er allerede tilmeldt dette fag","course_full":"Dette fag er fyldt","invalid_code":"Ugyldig kode","required":"Påkrævet","terms":"Du skal acceptere betingelserne","too_long":"Kan ikke overskride %{max} tegn"}}},"de":{"this_course_has_concluded_7995a84c":"Dieser Kurs wurde abgeschlossen.","user":{"errors":{"already_enrolled":"Sie sind bereits für diesen Kurs eingeschrieben.","course_full":"Dieser Kurs ist voll belegt.","invalid_code":"Ungültiger Code","required":"Erforderlich","terms":"Sie müssen den Bedingungen zustimmen.","too_long":"Darf %{max} Zeichen nicht überschreiten"}}},"el":{"user":{"errors":{"already_enrolled":"Είστε ήδη εγγεγραμένος/η σε αυτό το μάθημα","course_full":"Το μάθημα είναι πλήρες","invalid_code":"Μη έγκυρος κώδικας","required":"Απαιτούμενο","terms":"Πρέπει να συμφωνήσετε με αυτούς τους όρους","too_long":"Δεν πρέπει να έχει παραπάνω από %{max} χαρακτήρες"}}},"en-AU":{"this_course_has_concluded_7995a84c":"This course has concluded","user":{"errors":{"already_enrolled":"You are already enrolled in this course","course_full":"This course is full","invalid_code":"Invalid code","required":"Required","terms":"You must agree to the terms","too_long":"Can\'t exceed %{max} characters"}}},"en-AU-x-unimelb":{"this_course_has_concluded_7995a84c":"This subject has concluded","user":{"errors":{"already_enrolled":"You are already enrolled in this subject","course_full":"This subject is full","invalid_code":"Invalid code","required":"Required","terms":"You must agree to the terms","too_long":"Can\'t exceed %{max} characters"}}},"en-CA":{"this_course_has_concluded_7995a84c":"This course has concluded","user":{"errors":{"already_enrolled":"You are already enrolled in this course","course_full":"This course is full","invalid_code":"Invalid code","required":"Required","terms":"You must agree to the terms","too_long":"Can\'t exceed %{max} characters"}}},"en-GB":{"this_course_has_concluded_7995a84c":"This course has concluded","user":{"errors":{"already_enrolled":"You are already enrolled in this course","course_full":"This course is full","invalid_code":"Invalid code","required":"Required","terms":"You must agree to the terms","too_long":"Can\'t exceed %{max} characters"}}},"en-GB-x-lbs":{"this_course_has_concluded_7995a84c":"This programme has concluded","user":{"errors":{"already_enrolled":"You are already enrolled in this programme","course_full":"This programme is full","invalid_code":"Invalid code","required":"Required","terms":"You must agree to the terms","too_long":"Can\'t exceed %{max} characters"}}},"en-GB-x-ukhe":{"this_course_has_concluded_7995a84c":"This module has concluded","user":{"errors":{"already_enrolled":"You are already enrolled in this module","course_full":"This module is full","invalid_code":"Invalid code","required":"Required","terms":"You must agree to the terms","too_long":"Can\'t exceed %{max} characters"}}},"es":{"this_course_has_concluded_7995a84c":"Este curso finalizó","user":{"errors":{"already_enrolled":"Ya está inscrito en este curso","course_full":"Este curso está lleno","invalid_code":"Código inválido","required":"Obligatorio","terms":"Debe aceptar estos términos","too_long":"No puede superar los %{max} caracteres"}}},"fa":{"this_course_has_concluded_7995a84c":"این درس لغو شده است","user":{"errors":{"already_enrolled":"شما در حال حاضر در این درس ثبت نام شده اید","course_full":"ظرفیت این درس تکمیل شده است","invalid_code":"رمز معتبر نیست","required":"لازم","terms":"باید ضوابط را بپذیرید","too_long":"نمی تواند از %{max} نویسه فراتر رود"}}},"fi":{"this_course_has_concluded_7995a84c":"Tämä kurssi on viety loppuun","user":{"errors":{"already_enrolled":"Olet jo ilmoittautunut tälle kurssille","course_full":"Tämä kurssi on täynnä","invalid_code":"Koodi ei kelpaa","required":"Pakollinen","terms":"Sinun täytyy hyväksyä ehdot","too_long":"Ei voi ylittää %{max} merkkiä"}}},"fr":{"this_course_has_concluded_7995a84c":"Ce cours est terminé","user":{"errors":{"already_enrolled":"Vous êtes déjà inscrit à ce cours.","course_full":"Ce cours est complet.","invalid_code":"Code erroné","required":"Requis","terms":"Vous devez accepter les conditions.","too_long":"Ne doit pas dépasser %{max} caractères"}}},"fr-CA":{"this_course_has_concluded_7995a84c":"Ce cours est terminé","user":{"errors":{"already_enrolled":"Vous êtes déjà inscrit à ce cours.","course_full":"Ce cours est complet.","invalid_code":"Code erroné","required":"Requis","terms":"Vous devez accepter les conditions.","too_long":"Ne doit pas dépasser %{max} caractères"}}},"he":{"user":{"errors":{"already_enrolled":"כבר נרשמת לקורס זה","course_full":"קורס זה התמלא","invalid_code":"קוד שגוי","required":"נדרש","terms":"חובה להסכים לתנאים","too_long":"מספר התוים המכסימלי: %{max} "}}},"ht":{"this_course_has_concluded_7995a84c":"Kou sa a fini.","user":{"errors":{"already_enrolled":"Ou enskri nan kou sa a deja","course_full":"Kou sa a plen","invalid_code":"Kòd envalid","required":"Obligatwa","terms":"Ou dwe dakò ak kondisyon yo","too_long":"Pa kapab depase %{max} karaktè"}}},"hu":{"user":{"errors":{"already_enrolled":"Ön már beiratkozott ebbe a kurzusba","course_full":"Ez a kurzus megtelt","invalid_code":"Érvénytelen kód","required":"Kötelező","terms":"Fogadja el a feltételeket","too_long":"Nem lehet több, mint %{max} karakter"}}},"hy":{"user":{"errors":{"already_enrolled":"Դուք արդեն գրանցված եք դասընթացում","course_full":"Դասընթացի ուսանողների թիվը համալրված է","invalid_code":"Սխալ կոդ","required":"Պահանջվում է","terms":"Դուք պետք է համաձայնեք պայմաններին","too_long":"Նշանների թիվը չի կարող գերազանցել %{max} "}}},"is":{"this_course_has_concluded_7995a84c":"Þessu námskeiði er lokið","user":{"errors":{"already_enrolled":"Þú ert þegar innrituð/innritaður á þetta námskeið","course_full":"Námskeiðið er fullt","invalid_code":"Ógildur kóði","required":"Krafist","terms":"Þú verður að samþykkja skilmálana","too_long":"Má ekki fara yfir %{max} stafi"}}},"it":{"this_course_has_concluded_7995a84c":"Questo corso è terminato","user":{"errors":{"already_enrolled":"Sei già iscritto a questo corso","course_full":"Questo corso è pieno","invalid_code":"Codice non valido","required":"Obbligatorio","terms":"Devi accettare i termini","too_long":"Non può superare %{max} caratteri"}}},"ja":{"this_course_has_concluded_7995a84c":"このコースは終了しました","user":{"errors":{"already_enrolled":"このコースには既に登録されています","course_full":"このコースには空きがありません","invalid_code":"無効なコード","required":"必須","terms":"利用規約に同意する必要があります","too_long":"%{max} 文字以内にしてください"}}},"ko":{"user":{"errors":{"already_enrolled":"이 과목에 이미 등록함","course_full":"이 과목은 만원임","invalid_code":"유효하지 않은 코드","required":"필수","terms":"조건에 동의해야 합니다.","too_long":"%{max}글자를 초과할 수 없습니다."}}},"mi":{"this_course_has_concluded_7995a84c":"Kua mutu tēnei akoranga","user":{"errors":{"already_enrolled":"Kua whakauru kē koe i roto i tēnei akoranga","course_full":"Ko te ki tonu i tēnei akoranga","invalid_code":"waehere muhu","required":"e hiahiatia ana","terms":"Me whakāe koe ki te ngā","too_long":"Kāore e taea te nui %{max} pūāhua"}}},"nb":{"this_course_has_concluded_7995a84c":"Dette emnet er avsluttet","user":{"errors":{"already_enrolled":"Du er allerede registrert på dette emnet","course_full":"Dette emnet er fullt","invalid_code":"Ugyldig kode","required":"Obligatorisk","terms":"Du må si deg enig i vilkårene","too_long":"Kan ikke overstige %{max} tegn"}}},"nb-x-k12":{"this_course_has_concluded_7995a84c":"Faget er avsluttet","user":{"errors":{"already_enrolled":"Du er allerede registrert på dette faget","course_full":"Dette faget er fullt","invalid_code":"Ugyldig kode","required":"Obligatorisk","terms":"Du må si deg enig i vilkårene","too_long":"Kan ikke overstige %{max} tegn"}}},"nl":{"this_course_has_concluded_7995a84c":"Deze cursus is beëindigd","user":{"errors":{"already_enrolled":"Je bent al voor deze cursus ingeschreven","course_full":"Deze cursus zit vol","invalid_code":"Ongeldige code","required":"Vereist","terms":"Je moet akkoord gaan met de gebruiksvoorwaarden","too_long":"Mag maximum van %{max} tekens niet overschrijden."}}},"nn":{"this_course_has_concluded_7995a84c":"Emnet er avslutta","user":{"errors":{"already_enrolled":"Du er allereie påmeld til dette emnet","course_full":"Dette emnet er fullt","invalid_code":"Ugyldig kode","required":"Obligatorisk","terms":"Du må godta vilkåra","too_long":"Kan ikkje overskride %{max} teikn"}}},"pl":{"this_course_has_concluded_7995a84c":"Ten kurs został zakończony","user":{"errors":{"already_enrolled":"Jesteś już zapisany/-a na ten kurs","course_full":"Ten kurs jest pełny","invalid_code":"Nieprawidłowy kod","required":"Wymagany","terms":"Musisz się zgodzić na warunki","too_long":"Nie możesz przekroczyć %{max} znaków"}}},"pt":{"this_course_has_concluded_7995a84c":"Esta disciplina concluiu","user":{"errors":{"already_enrolled":"Já está inscrito nesta disciplina","course_full":"Esta disciplina está cheia","invalid_code":"Código inválido","required":"Necessário","terms":"Tem de aceitar os termos","too_long":"Não pode exceder %{max} caracteres"}}},"pt-BR":{"this_course_has_concluded_7995a84c":"Esse curso foi concluído","user":{"errors":{"already_enrolled":"Você já está matriculado neste curso","course_full":"As vagas deste curso estão preenchidas","invalid_code":"Código inválido","required":"Obrigatório","terms":"Você deve concordar com os termos","too_long":"Não pode exceder %{max} caracteres"}}},"ru":{"this_course_has_concluded_7995a84c":"Этот курс завершен","user":{"errors":{"already_enrolled":"Вы уже зарегистрированы на данном курсе","course_full":"Группа для данного курса набрана","invalid_code":"Неверный код","required":"Требуется","terms":"Вы должны согласиться с условиями","too_long":"Не может превышать %{max} символов"}}},"sl":{"this_course_has_concluded_7995a84c":"Ta predmet se je zaključil.","user":{"errors":{"already_enrolled":"V ta predmet ste že vpisani.","course_full":"Ta predmet je poln.","invalid_code":"Neveljavna koda","required":"Zahtevano","terms":"Strinjati se morate s pogoji.","too_long":"Ni mogoče preseči %{max} znakov."}}},"sv":{"this_course_has_concluded_7995a84c":"Kursen har avslutats","user":{"errors":{"already_enrolled":"Du är redan registrerad i den här kursen","course_full":"Kursen är full","invalid_code":"Ogiltig kod","required":"Obligatorisk","terms":"Du måste godkänna villkoren","too_long":"Får inte överskrida %{max} tecken"}}},"sv-x-k12":{"this_course_has_concluded_7995a84c":"Kursen har avslutats","user":{"errors":{"already_enrolled":"Du är redan registrerad i den här kursen","course_full":"Kursen är full","invalid_code":"Ogiltig kod","required":"Obligatorisk","terms":"Du måste godkänna villkoren","too_long":"Får inte överskrida %{max} tecken"}}},"tr":{"user":{"errors":{"already_enrolled":"Bu derse zaten kayıtlısınız","course_full":"Bu ders dolu","invalid_code":"Geçersiz kod","required":"Zorunlu","terms":"Şarları kabul etmelisiniz","too_long":"%{max} karakteri aşamazsınız"}}},"uk":{"user":{"errors":{"already_enrolled":"Ви вже зараховані на цей курс","course_full":"Цей курс заповнений","invalid_code":"Невірний код","required":"Обов\'язковий","terms":"Ви повинні погодитися з умовами","too_long":"Не можна перевищувати %{max} символів"}}},"zh-Hans":{"this_course_has_concluded_7995a84c":"此课程已结束","user":{"errors":{"already_enrolled":"您已经登记此课程","course_full":"此课程名额已满","invalid_code":"无效的代码","required":"需要","terms":"您必须同意这些条款","too_long":"不能超过 %{max} 个字符"}}},"zh-Hant":{"this_course_has_concluded_7995a84c":"此課程已結束","user":{"errors":{"already_enrolled":"您已註冊此課程","course_full":"此課程已滿","invalid_code":"無效的代碼","required":"必填","terms":"您必須同意這些條款","too_long":"不能超過 %{max} 個字元"}}}}'))
o("jQeR")
o("0sPK")
var u=t["default"].scoped("user")
var l=o("GLiE")
var n=o.n(l)
var a=o("FIFq")
var i=o.n(a)
var d=function(e,r){for(var o in r)c.call(r,o)&&(e[o]=r[o])
function t(){this.constructor=e}t.prototype=r.prototype
e.prototype=new t
e.__super__=r.prototype
return e},c={}.hasOwnProperty
r["a"]=function(e){d(r,e)
function r(){return r.__super__.constructor.apply(this,arguments)}r.prototype.modelType="user"
r.prototype.resourceName="users"
r.prototype.errorMap={name:{blank:u.t("errors.required","Required"),too_long:u.t("errors.too_long","Can't exceed %{max} characters",{max:255})},self_enrollment_code:{blank:u.t("errors.required","Required"),invalid:u.t("errors.invalid_code","Invalid code"),already_enrolled:u.t("errors.already_enrolled","You are already enrolled in this course"),concluded:u.t("This course has concluded"),full:u.t("errors.course_full","This course is full")},terms_of_use:{accepted:u.t("errors.terms","You must agree to the terms")}}
r.prototype.enrollments=function(e,r){return n.a.where(this.get("enrollments"),e,r)}
r.prototype.hasEnrollmentType=function(e){return!!this.enrollments({type:e},true)}
r.prototype.hasEnrollmentRole=function(e){return!!this.enrollments({role:e},true)}
r.prototype.findEnrollmentByRole=function(e){return this.enrollments({role:e},true)}
r.prototype.allEnrollmentsByType=function(e){return this.enrollments({type:e})}
r.prototype.allEnrollmentsByRole=function(e){return this.enrollments({role:e})}
r.prototype.pending=function(e){return n.a.some(this.get("enrollments"),(function(r){var o
return r.role===e&&("creation_pending"===(o=r.enrollment_state)||"invited"===o)}))}
r.prototype.inactive=function(){return n.a.every(this.get("enrollments"),(function(e){return"inactive"===e.enrollment_state}))}
r.prototype.sectionEditableEnrollments=function(){return n.a.select(this.get("enrollments"),(function(e){return"ObserverEnrollment"!==e.type}))}
return r}(i.a.Model)},btHx:function(e,r,o){"use strict"
var t=o("ouhR")
var s=o.n(t)
var u=o("FIFq")
var l=o.n(u)
var n=o("GLiE")
var a=o.n(n)
var i,d=function(e,r){return function(){return e.apply(r,arguments)}},c=function(e,r){for(var o in r)p.call(r,o)&&(e[o]=r[o])
function t(){this.constructor=e}t.prototype=r.prototype
e.prototype=new t
e.__super__=r.prototype
return e},p={}.hasOwnProperty,h=[].slice,_=[].indexOf||function(e){for(var r=0,o=this.length;r<o;r++)if(r in this&&this[r]===e)return r
return-1}
i=function(e){null==e&&(e="")
return e.charAt(0).toUpperCase()+e.substring(1).toLowerCase()}
r["a"]=function(e){c(r,e)
function r(){this._setStateAfterFetch=d(this._setStateAfterFetch,this)
return r.__super__.constructor.apply(this,arguments)}r.prototype.nameRegex=/rel="([a-z]+)/
r.prototype.linkRegex=/^<([^>]+)/
r.prototype.pageRegex=/\Wpage=(\d+)/
r.prototype.perPageRegex=/\Wper_page=(\d+)/
r.prototype.initialize=function(){r.__super__.initialize.apply(this,arguments)
return this.urls={}}
r.prototype.fetch=function(e){var o,t,u,l
null==e&&(e={})
e=a.a.clone(e)
this.loadedAll=false
t="fetching"+i(e.page)+"Page"
this[t]=true
if(null!=e.page){null==e.remove&&(e.remove=false)
if(null!=(u=this.urls)?u[e.page]:void 0){e.url=this.urls[e.page]
e.data=""}}else null==e.reset&&(e.reset=true)
null!=e.fetchOptions&&(e.data=e.fetchOptions)
this.trigger("beforeFetch",this,e)
null!=e.page&&this.trigger("beforeFetch:"+e.page,this,e)
l=null
e.dataFilter=(n=this,function(r){n[t]=false
n._setStateAfterFetch(l,e)
return r})
var n
o=e.dfd||s.a.Deferred()
l=r.__super__.fetch.call(this,e).done(function(r){return function(t,s,u){var l
r.trigger("fetch",r,t,e)
null!=e.page&&r.trigger("fetch:"+e.page,r,t,e);(null!=(l=r.urls)?l.next:void 0)||r.trigger.apply(r,["fetched:last"].concat(h.call(arguments)))
return r.loadAll&&null!=r.urls.next?setTimeout((function(){return r.fetch({page:"next",dfd:o})})):o.resolve(t,s,u)}}(this))
o.abort=l.abort
o.success=o.done
o.error=o.fail
return o}
r.prototype.canFetch=function(e){return null!=this.urls&&null!=this.urls[e]}
r.prototype._setStateAfterFetch=function(e,r){var o,t,s,u,l,n,a,i,d,c,p,h,m,g
null==this._urlCache&&(this._urlCache=[])
g=(n=r.url,_.call(this._urlCache,n)<0)
g||this._urlCache.push(r.url)
t=!this.atLeastOnePageFetched
p=t||("next"===(a=r.page)||"bottom"===a)&&g
h=t||("prev"===(i=r.page)||"top"===i)&&g
u=this.urls
this.urls=this._parsePageLinks(e)
p&&null!=this.urls.next?this.urls.bottom=this.urls.next:this.urls.next?this.urls.bottom=u.bottom:delete this.urls.bottom
h&&null!=this.urls.prev?this.urls.top=this.urls.prev:this.urls.prev?this.urls.top=u.top:delete this.urls.top
m=null!=(d=this.urls.first)?d:this.urls.next
if(null!=m){l=parseInt(m.match(this.perPageRegex)[1],10);(null!=(o=null!=this.options?this.options:this.options={}).params?o.params:o.params={}).per_page=l}this.urls.last&&(s=this.urls.last.match(this.pageRegex))&&(this.totalPages=parseInt(s[1],10));(null!=(c=this.urls)?c.next:void 0)||(this.loadedAll=true)
return this.atLeastOnePageFetched=true}
r.prototype._parsePageLinks=function(e){var r,o
r=null!=(o=e.getResponseHeader("link"))?o.split(","):void 0
null==r&&(r=[])
return a.a.reduce(r,(t=this,function(e,r){var o,s
o=r.match(t.nameRegex)[1]
s=r.match(t.linkRegex)[1]
e[o]=s
return e}),{})
var t}
return r}(l.a.Collection)},zQrl:function(e,r,o){"use strict"
var t=o("pQTu")
var s=o("m0r6")
Object(s["a"])(JSON.parse('{"ar":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"تحذير: %{user} هو عضو بالفعل في %{group}"}}},"ca":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"ADVERTIMENT: %{user} ja és membre de %{group}"}}},"cy":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"RHYBUDD: %{user} eisoes yn aelod o %{group}"}}},"da":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"ADVARSEL: %{user} er allerede medlem af %{group}"}}},"da-x-k12":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"ADVARSEL: %{user} er allerede medlem af %{group}"}}},"de":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"ACHTUNG: %{user} ist bereits Mitglied von %{group}"}}},"el":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"ΕΙΔΟΠΟΙΗΣΗ: Ο/Η %{user} είναι ήδη μέλος της ομάδας %{group}"}}},"en-AU":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"WARNING: %{user} is already a member of %{group}"}}},"en-AU-x-unimelb":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"WARNING: %{user} is already a member of %{group}"}}},"en-CA":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"WARNING: %{user} is already a member of %{group}"}}},"en-GB":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"WARNING: %{user} is already a member of %{group}"}}},"en-GB-x-lbs":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"WARNING: %{user} is already a member of %{group}"}}},"en-GB-x-ukhe":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"WARNING: %{user} is already a member of %{group}"}}},"es":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"ADVERTENCIA: %{user} ya es miembro de %{group}"}}},"fa":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"هشدار: %{user} اکنون عضو %{group} است"}}},"fi":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"VAROITUS: %{user} on jo jäsenenä kohteessa %{group}"}}},"fr":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"AVERTISSEMENT : %{user} est déjà un membre du groupe %{group}"}}},"fr-CA":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"AVERTISSEMENT : %{user} est déjà un membre du groupe %{group}"}}},"he":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"התראה: המשתמש %{user} הינו כבר חבר ב %{group}"}}},"ht":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"ATANSYON: %{user} gentan manm %{group}"}}},"hu":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"FIGYELEM! %{user} már tagja a %{group} csoportnak"}}},"hy":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"ՆԱԽԱԶԳՈՒՇԱՑՈՒՄ. %{user}ը արդեն %{group} խմբի անդամ է"}}},"is":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"Viðvörun: %{user} er nú þegar meðlimur í  %{group}"}}},"it":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"AVVISO: %{user} è già membro di %{group}"}}},"ja":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"警告: %{user} は既に %{group} のメンバーです"}}},"ko":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"경고: %{user} 는 이미 %{group}의 멤버입니다."}}},"mi":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"KIA MATĀRA: Kua hono kē a %{user} ki a %{group}"}}},"nb":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"ADVARSEL: %{user} er allerede medlem av %{group}"}}},"nb-x-k12":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"ADVARSEL: %{user} er allerede medlem av %{group}"}}},"nl":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"WAARSCHUWING: %{user}is al lid van %{group}"}}},"nn":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"Åtvaring: %{user} er allereie medlem av %{group}"}}},"pl":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"OSTRZEŻENIE: użytkownik %{user} jest już członkiem grupy %{group}"}}},"pt":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"AVISO: %{user} já é um membro de %{group}"}}},"pt-BR":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"ATENÇÃO: %{user} já é um membro de %{group}"}}},"ru":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"ПРЕДУПРЕЖДЕНИЕ. %{user} уже является членом %{group}"}}},"sl":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"OPOZORILO: %{user} je že član %{group}"}}},"sv":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"VARNING! %{user} är redan medlem i %{group}"}}},"sv-x-k12":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"VARNING! %{user} är redan medlem i %{group}"}}},"tr":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"UYARI: %{user}, zaten %{group}\'ın bir üyesi"}}},"uk":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"ПОПЕРЕДЖЕННЯ: %{user} вже є членом %{group}"}}},"zh-Hans":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"警告： %{user} 已经是 %{group} 的成员"}}},"zh-Hant":{"GroupUserCollection":{"flash":{"userAlreadyInGroup":"警告：%{user}已經是%{group}的成員"}}}}'))
o("jQeR")
o("0sPK")
var u=t["default"].scoped("GroupUserCollection")
var l=o("ouhR")
var n=o.n(l)
var a=o("btHx")
var i=o("Ou09")
o("jYyc")
var d=function(e,r){return function(){return e.apply(r,arguments)}},c=function(e,r){for(var o in r)p.call(r,o)&&(e[o]=r[o])
function t(){this.constructor=e}t.prototype=r.prototype
e.prototype=new t
e.__super__=r.prototype
return e},p={}.hasOwnProperty
var h=function(e){c(r,e)
function r(){this.moved=d(this.moved,this)
this.sync=d(this.sync,this)
return r.__super__.constructor.apply(this,arguments)}r.prototype.sync=function(e,r,o){var t,s
t=this.get("group")
s=this.previous("group")
if(t===s)return
null!=t&&this.joinGroup(t)
if(s&&(null==t||this.get("category").get("allows_multiple_memberships")))return this.leaveGroup(s)}
r.prototype.joinGroup=function(e){return n.a.ajaxJSON("/api/v1/groups/"+e.id+"/memberships","POST",{user_id:this.get("id")},(r=this,function(e){return r.trigger("ajaxJoinGroupSuccess",e)}))
var r}
r.prototype.leaveGroup=function(e){return n.a.ajaxJSON("/api/v1/groups/"+e.id+"/users/"+this.get("id"),"DELETE")}
r.prototype.moved=function(){return this.trigger("moved",this)}
return r}(i["a"])
var _=o("5Ky4")
var m=function(e,r){return function(){return e.apply(r,arguments)}},g=function(e,r){for(var o in r)f.call(r,o)&&(e[o]=r[o])
function t(){this.constructor=e}t.prototype=r.prototype
e.prototype=new t
e.__super__=r.prototype
return e},f={}.hasOwnProperty
r["a"]=function(e){g(r,e)
function r(){this.onChangeGroup=m(this.onChangeGroup,this)
return r.__super__.constructor.apply(this,arguments)}r.prototype.comparator=function(e){return e.get("sortable_name").toLowerCase()}
r.optionProperty("group")
r.optionProperty("category")
r.optionProperty("markInactiveStudents")
r.prototype.url=function(){var e,r
r="/api/v1/groups/"+this.group.id+"/users?"
e={per_page:50,include:["sections","group_submissions"],exclude:["pseudonym"]}
this.markInactiveStudents&&e.include.push("active_status")
return r+n.a.param(e)}
r.prototype.initialize=function(e){r.__super__.initialize.apply(this,arguments)
this.loaded=this.loadedAll=null!=e
this.on("change:group",this.onChangeGroup)
return this.model=h.extend({defaults:{group:this.group,category:this.category}})}
r.prototype.load=function(e){null==e&&(e="all")
this.loadAll="all"===e
this.loaded=true
"none"!==e&&this.fetch()
return this.load=function(){}}
r.prototype.onChangeGroup=function(e,r){var o
this.removeUser(e)
return null!=(o=this.groupUsersFor(r))?o.addUser(e):void 0}
r.prototype.membershipsLocked=function(){return false}
r.prototype.getUser=function(e){return this.get(e.replace("user_",""))}
r.prototype.addUser=function(e){var r
if(this.membershipsLocked()){null!=(r=this.get(e))&&r.moved()
return}if(this.loaded){if(this.get(e))this.flashAlreadyInGroupError(e)
else{this.add(e)
this.increment(1)}return e.moved()}e.once("ajaxJoinGroupSuccess",(o=this,function(r){if(r.just_created)return
o.increment(-1)
return o.flashAlreadyInGroupError(e)}))
return this.increment(1)
var o}
r.prototype.flashAlreadyInGroupError=function(e){return n.a.flashError(u.t("flash.userAlreadyInGroup","WARNING: %{user} is already a member of %{group}",{user:Object(_["a"])(e.get("name")),group:Object(_["a"])(this.group.get("name"))}))}
r.prototype.removeUser=function(e){var r,o
if(this.membershipsLocked())return
this.increment(-1);(null!=(r=this.group)&&null!=(o=r.get("leader"))?o.id:void 0)===e.id&&this.group.set("leader",null)
if(this.loaded)return this.remove(e)}
r.prototype.increment=function(e){return this.group.increment("members_count",e)}
r.prototype.groupUsersFor=function(e){var r
return null!=(r=this.category)?r.groupUsersFor(e):void 0}
return r}(a["a"])}}])

//# sourceMappingURL=46-c-40ab47ca7a.js.map