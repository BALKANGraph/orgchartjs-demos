window.onload = function () {
        
  OrgChart.templates.derek = Object.assign({}, OrgChart.templates.ana);
OrgChart.templates.derek.link = 
'<path stroke="#aeaeae" stroke-width="1px" fill="none" d="M{xa},{ya} C{xb},{yb} {xc},{yc} {xd},{yd}" />';
OrgChart.templates.derek.field_0 = 
'<text width="235" style="font-size: 24px;" fill="#aeaeae" x="125" y="90" text-anchor="middle">{val}</text>';
OrgChart.templates.derek.field_1 = 
'<text width="130" style="font-size: 16px;" fill="#aeaeae" x="230" y="30" text-anchor="end">{val}</text>';
OrgChart.templates.derek.node = 
'<rect x="0" y="0" height="120" width="250" fill="#ffffff" stroke-width="0" stroke="none" rx="5" ry="5"></rect>'
+ '<path d="M1.0464172536455116 0.43190469224125483 C53.84241668202045 -0.788936709486018, 103.41786516460891 -0.7020837047025514, '
+ '252.36637077877316 2.5880308844586395 M2.9051048929845287 1.416953777798454 C94.33574460557007 1.0012759229446266, 189.39715875173388 '
+ '0.6456731199982935, 252.78978918302985 2.4201778360648074 M253.62699063660838 2.9193391477217157 C249.73034548542307 47.55931231380586, '
+ '252.87525930998083 91.26715478378368, 253.10179184315842 121.7440626272514 M251.37132919216776 1.8733470844542213 C252.2809675089866 '
+ '32.73212950193807, 251.34402714677282 62.11470833534073, 251.87050951184997 121.58550827952904 M253.33945599552268 122.05611967964798 '
+ 'C171.36076589155192 123.47737863766969, 88.83808249906167 125.27259840604118, 3.1999393565128846 121.26868651191393 M252.26165120810887 '
+ '122.5938901158243 C192.76996487394138 123.44664377223289, 131.37122563794998 122.94880221756583, 1.2373006891045732 121.88999197324904 '
+ 'M2.223863211672736 121.04511533445009 C1.4438124377596486 86.38398979211773, 2.8540468486809294 55.805566409478374, 3.8890451480896644 '
+ '1.7483404843613926 M2.244347335490432 122.60147677858153 C2.100672267495622 92.31058899219087, 1.6261027388218166 64.160806803772, '
+ '1.6325734600065367 1.1945909353588222" stroke="#aeaeae"></path>';
OrgChart.templates.derek.defs = 
'<filter id="grayscale"><feColorMatrix type="matrix" '
+ 'values="0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0" /></filter>';
OrgChart.templates.derek.img_0 = 
'<clipPath id="{randId}"><circle cx="60" cy="30" r="36"></circle></clipPath><path d="M59.27394950148486 -8.301766751084706 '
+ 'C67.69473471187919 -8.865443566034696, 80.29031463018414 -4.859224005049532, 87.18598909426663 0.33238763875740673 C94.08166355834912 '
+ '5.523999282564345, 98.98110545022442 14.745947814116153, 100.64799628597981 22.847903111756924 C102.31488712173521 30.949858409397695, '
+ '101.71467046207992 41.576461864335656, 97.187334108799 48.944119424602036 C92.65999775551809 56.311776984868416, '
+ '82.03610997730354 64.08326918912249, '
+ '73.48397816629435 67.05384847335519 C64.93184635528516 70.02442775758789, 54.01035575000908 69.7708463163516, '
+ '45.874543242743854 66.76759512999827 C37.738730735478626 63.76434394364495, 29.04872278114092 56.18846598822666, '
+ '24.669103122702957 49.034341355235284 C20.289483464264993 41.88021672224391, 18.158053754175985 31.830144088547545, '
+ '19.596825292116065 23.84284733205002 C21.035596830056146 15.855550575552495, 25.795252700735308 6.49424361294595, '
+ '33.30173235034344 1.1105608162501355 C40.80821199995158 -4.273121980445679, 58.92971347412665 -7.0427741956040295, '
+ '64.63570318976488 -8.459249448124865 C70.34169290540312 -9.8757247006457, 67.62192977382313 -7.857597534262704, '
+ '67.53767064417285 -7.388290698874876 M62.748378255307365 -8.335850348284236 C71.26603403676657 -8.411982637093757, '
+ '83.3134559967999 -3.2332675886967737, 89.65944437868365 2.387927626929269 C96.00543276056739 8.00912284255531, '
+ '99.8018539626104 17.389209313563462, 100.82430854660979 25.39132094547202 C101.84676313060918 33.39343257738058, '
+ '100.69202080288338 43.23907526327184, 95.79417188267999 50.40059741838061 C90.8963229624766 57.56211957348938, '
+ '80.19607375493683 65.6933432424228, 71.43721502538948 68.36045387612462 C62.678356295842114 71.02756450982645, '
+ '51.31858275833087 70.03148525422704, 43.241019505395826 66.40326122059156 C35.16345625246078 62.775037186956084, '
+ '26.840434236544123 54.120081952867466, 22.971835507779204 46.59110967431175 C19.103236779014285 39.06213739575604, '
+ '17.94937086132579 28.992694575765086, 20.029427132806305 21.22942754925726 C22.10948340428682 13.466160522749433, '
+ '28.239699334668693 5.033316212766326, 35.452173136662296 0.011507515264803203 C42.6646469386559 -5.010301182236719, '
+ '59.029629541347575 -7.774813789367088, 63.30426994476793 -8.901424635751876 C67.57891034818829 -10.028035482136666, '
+ '61.20261013623477 -7.6019933587127815, 61.10001555718443 -6.748157563043929" style="stroke: #aeaeae; stroke-width: 2; fill: none;">'
+ '</path><image filter="url(#grayscale)" preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="20" y="-10" '
+ 'width="80" height="80"></image>';
OrgChart.templates.derek.minus = 
'<circle cx="15" cy="15" r="15" fill="#ffffff" stroke-width="0"></circle><path d="M17.23891044927774 1.1814294501322902 '
+ 'C20.29160626452551 1.030769196657948, 23.947970993006972 3.1719335544839753, 26.394853759110717 5.588671983418923 C28.84173652521446 '
+ '8.005410412353871, 31.246576051221126 12.511831935158815, 31.920207045900206 15.681860023741976 C32.593838040579286 18.85188811232514, '
+ '32.286699675240925 21.948848714186923, 30.436639727185195 24.60884051491789 C28.586579779129462 27.268832315648858, 24.05246578668338 '
+ '30.675892912089505, 20.819847357565806 31.64181082812777 C17.58722892844823 32.60772874416604, 13.992479948405318 31.588687222722193, '
+ '11.040929152479746 30.404348011147484 C8.089378356554175 29.220008799572774, 4.476346434761303 27.363985211380037, 3.110542582012373 '
+ '24.535775558679525 C1.7447387292634435 21.707565905979013, 2.0125141957866703 16.770753327135857, 2.8461060359861694 13.435090094944405 '
+ 'C3.6796978761856685 10.099426862752953, 4.99838568665378 6.33816589513267, 8.112093623209367 4.521796165530812 C11.225801559764953 '
+ '2.7054264359289544, 18.764666760207586 2.8505106971937155, 21.528353655319687 2.5368717173332556 C24.29204055043179 2.2232327374727956, '
+ '24.87088035867136 2.534909813412478, 24.69421499388197 2.6399622863680516 M17.281640595209783 0.19007885243722633 C20.364244435145494 '
+ '-0.11577004716725742, 25.135133405402318 3.2303746945812075, 27.855952721223584 5.7353294427454955 C30.57677203704485 8.240284190909783, '
+ '33.34617538156587 11.802005102645245, 33.606556490137386 15.219807341422953 C33.8669375987089 18.637609580200664, '
+ '31.337125602828454 23.632355493641384, 29.418239372652685 26.24214287541175 C27.499353142476917 28.85193025718212, '
+ '25.044077583504755 30.13224182494988, 22.093239109082777 30.87853163204516 C19.1424006346608 31.62482143914044, '
+ '14.787723024669972 31.933646092018286, 11.713208526120809 30.719881717983426 C8.638694027571646 29.506117343948567, '
+ '5.1333408130933655 26.55826769548724, 3.6461521177877945 23.595945387835997 C2.1589634224822234 20.633623080184755, '
+ '1.9785010696309286 16.25773192692332, 2.7900763542873843 12.945947872075987 C3.60165163894384 9.634163817228652, '
+ '5.999109831161897 5.87039683716568, 8.51560382572653 3.7252410587519886 C11.032097820291161 1.5800852803382974, '
+ '16.377503419445155 0.40900388408914673, 17.88904032167518 0.0750132015938405 C19.400577223905202 -0.2589774809014657, '
+ '17.448582822593046 1.2406055078364167, 17.584825239106664 1.7212969637801514" style="stroke: rgb(174, 174, 174); '
+ 'stroke-width: 1; fill: none;">'
+ '</path><path d="M8.571186416504453 17.64803469305822 C12.085276840999553 15.452815349785006, 19.337130848197884 16.101685575250833, '
+ '26.855223350440756 18.889299472836626 M7.857231507904164 16.840024354210055 C15.011849298914942 18.06824852479784, '
+ '22.352469730756894 17.800410681835732, 26.732355140012178 16.88515873797708" style="stroke: #aeaeae; stroke-width: 1; fill: none;"></path>';
OrgChart.templates.derek.plus = 
'<circle cx="15" cy="15" r="15" fill="#ffffff" stroke-width="0"></circle>'
+ '<path d="M12.257463787262992 2.40166003616363 C15.548960627027807 '
  + '1.1768586505919105, 20.323768339136134 1.874732142276981, 23.661947633240565 3.0864861053786417 C27.000126927344997 4.298240068480302, '
  + '30.703811226452725 6.729324000523814, 32.286539551889575 9.672183814773595 C33.86926787732643 12.615043629023376, '
  + '33.788018167397944 17.557781915741554, 33.158317585861674 20.743644990877332 C32.528617004325405 23.92950806601311, '
  + '31.137543762406274 26.899980401737224, 28.508336062671955 28.787362265588257 C25.879128362937635 30.67474412943929, '
  + '21.064677192956335 31.99302804642975, 17.383071387455747 32.06793617398354 C13.701465581955157 32.14284430153733, '
  + '9.342085269075854 31.17242931287016, 6.418701229668416 29.236811030911003 C3.4953171902609785 27.301192748951845, '
  + '0.29124975331190645 23.792422306170057, -0.15723284898887968 20.454226482228595 C-0.6057154512896659 17.116030658287134, '
  + '1.5769138742615705 12.178626667602387, 3.7278056158636996 9.207636087262241 C5.878697357465828 6.236645506922095, '
  + '10.970632450860041 3.8471017540469195, 12.748117600623896 2.6282830001877198 C14.525602750387751 1.4094642463285199, '
  + '14.289563699001825 1.9470094191022314, 14.392716514446832 1.894723564107041 M22.43549828180672 1.2256088400576157 C25.69018250895055 '
  + '1.7704365119039576, 29.24546322166512 4.979269460398017, 31.051492912414023 8.188373611713667 C32.85752260316293 11.397477763029316, '
  + '33.67207918890526 17.17514768034262, 33.27167642630015 20.480233747951512 C32.871273663695035 23.785319815560406, '
  + '31.41050911947538 25.966765564166938, 28.649076336783356 28.01889001736704 C25.887643554091333 30.07101447056714, '
  + '20.094058835586818 32.38500719321419, 16.70307973014802 32.79298046715211 C13.31210062470922 33.20095374109003, '
  + '10.940906263905317 32.367748192606626, 8.303201704150565 30.46672966099454 C5.665497144395813 28.565711129382457, '
  + '2.097338248187536 24.641108687248686, 0.8768523716195098 21.386869277479594 C-0.34363350494851663 18.132629867710502, '
  + '-0.763694313917872 14.0433435213021, 0.980286444742406 10.941293202379995 C2.7242672034026842 7.83924288345789, '
  + '7.945090366802328 4.317959037402062, 11.340736923581177 2.774567363946959 C14.736383480360027 1.231175690491856, '
  + '19.39979547907987 1.5862021443476335, 21.354165785415507 1.6809431616493775 C23.308536091751144 1.7756841789511215, '
  + '22.887857886273373 3.132249638930103, 23.06695876159499 3.343013467757423" '
  + 'style="stroke: rgb(174, 174, 174); stroke-width: 1; fill: none;">'
  + '</path><path d="M7.0048103933165935 18.109075284628886 C12.152504846776358 18.486044066779655, 15.926735549928488 18.85477711845977, '
  + '26.641287664541796 15.553207106118496 M6.796084928139555 16.174781745374535 C14.085050058006614 16.53898319893461, '
  + '19.579209483395115 16.725914747038104, 27.441803598385356 17.277875712554966" style="stroke: #aeaeae; stroke-width: 1; fill: none;">'
  + '</path><path d="M16.293755471804 6.234638030793387 C17.448668211406996 11.453666045700338, 16.27043554943843 18.842895411477887, '
  + '16.90423703847114 28.952046969222806 M17.809777051185264 7.011866752183222 C17.599122858612276 13.07833796918755, '
  + '16.995204905243295 18.587342115968614, 17.888568853882067 26.844926419317094" style="stroke: #aeaeae; stroke-width: 1; fill: none;">'
+ '</path>';
OrgChart.templates.derek.nodeMenuButton = 
'<g style="cursor:pointer;" transform="matrix(1,0,0,1,210,80)" data-ctrl-n-menu-id="{id}">'
+ '<rect x="-4" y="-4" fill="#000000" fill-opacity="0" width="30" height="30"></rect>'
+ '<path d="M28.28024041166867 10.015533059199505 C16.45705393905741 10.81309700412131, 9.85276157405196 9.87162723980281, '
+ '3.5441213169168515 7.075531655648353 M27.551825308513525 8.923800642512257 C18.159502224784205 9.337153563754718, '
+ '7.451197502628936 9.284728719203128, 1.8548423867425456 8.753004894810802 M27.907104120536573 17.662200828300364 C18.343063985797404 '
+ '18.998694042201137, 6.69417200021006 18.568117962359516, 2.7668346274558218 17.84920936843539 M26.99365966559525 17.444217688828093 '
+ 'C18.288291344549645 16.258053076066645, 10.047008592341617 16.913684103209345, 2.1772395910449567 17.55258716848472 M25.754130110044443 '
+ '24.79648729629354 C19.716463597004157 24.059273917380096, 12.571903015673474 24.723484329803995, '
+ '1.2709092686545498 25.961416660790483 M26.031268385778997 24.853114475295413 C16.16958752624931 25.047162545233455, '
+ '7.4039608372111765 23.9169859615211, 1.4736400026930716 24.342985647697336" style="stroke: rgb(174, 174, 174); stroke-width: 1; '
+ 'fill: none;">'
+ '</path>'
+ '</g>';

var chart = new OrgChart(document.getElementById("tree"), {
  template: 'derek',
  enableDragDrop: true,
nodeBinding: {
      field_0: "name",
      field_1: "title",
      img_0: "img"
  },

});

nodes = [
{ id: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
      { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
      { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" },
      { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
      { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", img: "https://cdn.balkan.app/shared/6.jpg" },
      { id: 6, pid: 3, name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg" }
  ];


  chart.load(nodes);

}