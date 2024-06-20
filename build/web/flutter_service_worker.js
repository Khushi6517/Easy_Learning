'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1e6e530b5cdaede5ac6b4f3eb9a2870f",
"assets/AssetManifest.bin.json": "6877e62c2a6507829542099350fb9a41",
"assets/AssetManifest.json": "c1cf41049e4e9fd00d1d52afdc431602",
"assets/assets/colours/black.svg": "647cc1b01116b22e32b445db515e2697",
"assets/assets/colours/blue.svg": "f419eadd6374b5319a71bb34da9f2d48",
"assets/assets/colours/brown.svg": "c6e6ae9ac2cfdfdc8e0fb472866b4e03",
"assets/assets/colours/colours-cover.jpg": "71b3056d4a7c85868718ff8e3dbf7edb",
"assets/assets/colours/colours-cover.png": "2a03597c21dc88cc603efd77a7099557",
"assets/assets/colours/green.svg": "3c4389f668ebeb0cc3b19fa7ce3b4dfe",
"assets/assets/colours/orange.svg": "2df469dbde7e7d856c74163861585853",
"assets/assets/colours/pink.svg": "265c8c9af08b5e3a3780702f8dd8ff84",
"assets/assets/colours/red.svg": "1e886224c8b0b54ae6245654090ee237",
"assets/assets/colours/violet.svg": "2f37881f7720b341c82e2005670b393d",
"assets/assets/colours/white.svg": "f5f77fa52d2906cecc87c4b7ae1c5c1c",
"assets/assets/colours/yellow.svg": "da21b22ae5eb9c1cbbc7188a181e8acf",
"assets/assets/explore/dot.svg": "7d5a69eaf8e0199dc8abeddd296faf0d",
"assets/assets/explore/drawing_board.svg": "564889d7bb16e79445843c5e6c025c28",
"assets/assets/explore/notebook.svg": "56ff74bc60e296d7f0510fa480e863fc",
"assets/assets/fonts/comic-sans-ms/ComicSansMS3.ttf": "f456b1ee5e3e01e6640846005d24cd86",
"assets/assets/fruitsVeges/apple.svg": "0bdc5470ab8d771f652eb10523d5a56d",
"assets/assets/fruitsVeges/banana.svg": "d8a282c6ee1eb285b9b19dcf4dd04513",
"assets/assets/fruitsVeges/carrot.svg": "f384a72b5458f04cbdf04380863a475c",
"assets/assets/fruitsVeges/chilli.svg": "48eb21ecb31ad6151bdc3b61aa99aa49",
"assets/assets/fruitsVeges/cover.jpg": "f96af92fe952a13088e299549673fae7",
"assets/assets/fruitsVeges/eggplant.svg": "f4f837ce8dcf5da682fafca625aad19f",
"assets/assets/fruitsVeges/ginger.svg": "537be53055a206af7c8300fd0698a2d9",
"assets/assets/fruitsVeges/grapes.svg": "be47edd4effba923373f3a9e2d341372",
"assets/assets/fruitsVeges/kiwi.svg": "a546cfac93af0f9b82b30ee0cacbda20",
"assets/assets/fruitsVeges/okra.svg": "10476d4a58150fce10cec79ed527ec22",
"assets/assets/fruitsVeges/orange.svg": "e5938943abd558f1c6f2b72acb7b7f15",
"assets/assets/fruitsVeges/pineapple.svg": "90dd68fa660ea862e99876653a46b034",
"assets/assets/fruitsVeges/potato.svg": "a1609f862a2245c2535e6cac25696bec",
"assets/assets/fruitsVeges/tomato.svg": "9422ef09fc7cf89574ada3e536e23bdd",
"assets/assets/fruitsVeges/watermelon.svg": "6857157807132a88752e3a93404d2de6",
"assets/assets/images/alphabet/alphabets.jpg": "d73f461a017afdb2483ec46e9f4a12b7",
"assets/assets/images/alphabet/apple.svg": "0bdc5470ab8d771f652eb10523d5a56d",
"assets/assets/images/alphabet/ball.svg": "9f62d04974f8c5d9fe4aa071f64e8359",
"assets/assets/images/alphabet/cat.svg": "8a98466275f19079a1a8fe846504f2d9",
"assets/assets/images/alphabet/dog.svg": "bd278cc0566d591d769b82010fb80c05",
"assets/assets/images/alphabet/elephant.svg": "21efeaab700502cad6d35ea183a60c2a",
"assets/assets/images/alphabet/fish.svg": "e28568bbf7a244cf48e32fd0b89ef09a",
"assets/assets/images/alphabet/grapes.svg": "be47edd4effba923373f3a9e2d341372",
"assets/assets/images/alphabet/horse.svg": "a187d3c8806c3e40bdec7f51a619357b",
"assets/assets/images/alphabet/icecream.svg": "be79cae25b88de9ae1237d09a052ba94",
"assets/assets/images/alphabet/joker.svg": "045d1b4997bb2714ff55c2e1361e1973",
"assets/assets/images/alphabet/king.svg": "d428504cc03cc553052330537cb50dad",
"assets/assets/images/alphabet/lion.svg": "373f22a92829c7817cba831f178511f9",
"assets/assets/images/alphabet/money.svg": "f42221856a72c509b32fc0b8492b9903",
"assets/assets/images/alphabet/nest.svg": "e0363ad850f94df2be05304802c72f17",
"assets/assets/images/alphabet/orange.svg": "c277ab35f7478925ecdcfc9f2d8a2bc2",
"assets/assets/images/alphabet/parrot.svg": "3648b3c540372c732ebf446f30f259b5",
"assets/assets/images/alphabet/queen.svg": "1c0384b4a055cb8e8603ac7cb1c2d3f5",
"assets/assets/images/alphabet/rabbit.svg": "1b1c20bc27eb203f04d83f32f3a74c28",
"assets/assets/images/alphabet/shiva.svg": "1af4a8530f603482a5782c2fabd12ebb",
"assets/assets/images/alphabet/table.svg": "a005a28bbfac8290749f863480146a08",
"assets/assets/images/alphabet/umbrella.svg": "4749c0b4cc925010f61d2347ba830009",
"assets/assets/images/alphabet/van.svg": "026b1856f026dfcf55ae017bc05093bd",
"assets/assets/images/alphabet/window.svg": "06bfce83898a9dfa676664e78fba10a5",
"assets/assets/images/alphabet/xerox.svg": "5b4a3efab6b9f441d08279a7da2275c2",
"assets/assets/images/alphabet/yellow.svg": "37b571243c8c6a5b436df90916c06c45",
"assets/assets/images/alphabet/zero.svg": "bd9b7c84611075c694d79e94dc97140d",
"assets/assets/images/animal/animals.jpg": "7a6968889db10d2c852717a56f4e2972",
"assets/assets/images/animal/bear.svg": "ee74a0527e57738e7c8ac8d1611d1ec2",
"assets/assets/images/animal/cat.svg": "8a98466275f19079a1a8fe846504f2d9",
"assets/assets/images/animal/cow.svg": "ef7d1593c4a0a50c86ed6b803cbda0e7",
"assets/assets/images/animal/deer.svg": "83929e52471e662fecea26705423b445",
"assets/assets/images/animal/dog.svg": "bd278cc0566d591d769b82010fb80c05",
"assets/assets/images/animal/elephant.svg": "21efeaab700502cad6d35ea183a60c2a",
"assets/assets/images/animal/fox.svg": "afc5b7cac985bcb57db7a5f1a78cbc0e",
"assets/assets/images/animal/giraffe.svg": "c5b05e49897c93325eba9bf206cf2239",
"assets/assets/images/animal/goat.svg": "68ee74641d6c19601ec9a2ea45e7a4ba",
"assets/assets/images/animal/horse.svg": "a187d3c8806c3e40bdec7f51a619357b",
"assets/assets/images/animal/kangaroo.svg": "b966d71b63ed3126bb1234ce3b1d6507",
"assets/assets/images/animal/lion.svg": "373f22a92829c7817cba831f178511f9",
"assets/assets/images/animal/monkey.svg": "8f6bf160b07c709788177bde19d8089a",
"assets/assets/images/animal/pig.svg": "445285c60549f319972c06e454541209",
"assets/assets/images/animal/rabbit.svg": "1b1c20bc27eb203f04d83f32f3a74c28",
"assets/assets/images/animal/sheep.svg": "36fe5578104df12fc38dd8e54176c62e",
"assets/assets/images/animal/snake.svg": "f5a223fa3555f6089b994de0b4ba255b",
"assets/assets/images/animal/squirrel.svg": "83642740a4edfa716c541ebc860bab5f",
"assets/assets/images/animal/tiger.svg": "c07a0e1b57bab2874e3cac1d051639b7",
"assets/assets/images/animal/zebra.svg": "9db3db419186c106f5f64589e70bb4e7",
"assets/assets/images/birds/Bagula.svg": "2edf203ceeac21332920443492fe3269",
"assets/assets/images/birds/Baya.svg": "c0c8edb3ade57186bb1f51a3309b97d7",
"assets/assets/images/birds/birds.jpg": "fcdb30e47484653f4a400fffb9c04cf2",
"assets/assets/images/birds/Bulbul.svg": "99a4e8dd87f098922847e511c8e756f7",
"assets/assets/images/birds/Crow.svg": "af88e4001ed88f25cac2b2f93553e52e",
"assets/assets/images/birds/Duck.svg": "4429709d37469bb45d3317c6d42d5999",
"assets/assets/images/birds/Eagle.svg": "fadd35b9c8a8a2d4ca63b96c1be34774",
"assets/assets/images/birds/Goose.svg": "79a0f5eb3325ccd4e237434576365b84",
"assets/assets/images/birds/Hen.svg": "dc6f1b1da52abb6c63cb8e0a69f2b1c9",
"assets/assets/images/birds/Hummingbird.svg": "053c788a60b1c4e3b5e6eec1205ea694",
"assets/assets/images/birds/Kingfisher.svg": "e49a14783238e82effbec2d7f261cd9e",
"assets/assets/images/birds/Koel.svg": "479ce6854d6c3dfa5fd0e089d89f1339",
"assets/assets/images/birds/Maina.svg": "203521d218d8de544147418d57f57fc5",
"assets/assets/images/birds/Ostrich.svg": "3660a0a531b13e0df7a65369549384da",
"assets/assets/images/birds/Owl.svg": "086a4038b1494f6f47c70db68e999215",
"assets/assets/images/birds/Parrot.svg": "b79362487eda7716214511724efbe92c",
"assets/assets/images/birds/Pigeon.svg": "bbc4f9d84d0368fafbfcf86d2f7eca8c",
"assets/assets/images/birds/Robin.svg": "dc855f7e690401d58674da231fd3333b",
"assets/assets/images/birds/Seagull.svg": "39ac7608c04f22177a119478720acd1d",
"assets/assets/images/birds/Sparrow.svg": "fdaa9f52ce34f2e47baf72a5d0d8c0cd",
"assets/assets/images/birds/Swan.svg": "f64d0612c8aee123895c823e1531b147",
"assets/assets/images/birds/Vulture.svg": "ddbb0b977a68fda17d594615a4e1e331",
"assets/assets/images/birds/Woodpecker.svg": "ca069fcb5249a15bf3d5ec8c29716aeb",
"assets/assets/images/body/Ankle.svg": "42f5ff6cbfabd66c330580ef3b9313ee",
"assets/assets/images/body/Arm.svg": "a49d1a50fc424df0d3bd366fcf0796fc",
"assets/assets/images/body/Back.svg": "b493a2e2161b550b3f7deb15a10bdf48",
"assets/assets/images/body/Belly.svg": "ba5d4d658ed5c3e8a663af60685296b3",
"assets/assets/images/body/body.jpg": "ad9720f58619ca0164ccaecf6870a8b0",
"assets/assets/images/body/Cheek.svg": "a9715a736cc99ac3fdaa325697282d14",
"assets/assets/images/body/Chest.svg": "472c0cb73f4aee706db040f84e0fbf1e",
"assets/assets/images/body/Chin.svg": "04d3f490e0a950e2e8efcaac02a351aa",
"assets/assets/images/body/Ear.svg": "b0421f58e73938decb2d6eaeb217ed82",
"assets/assets/images/body/Elbow.svg": "d7d872fb233388d944c442a1ac538b2e",
"assets/assets/images/body/Eye.svg": "263ad7a31f0816f636ff38c3ac4b08e8",
"assets/assets/images/body/Fingers.svg": "c20730618fd51821b471930c1e5419d7",
"assets/assets/images/body/Foot.svg": "dcad854c443aaa846f5572e8d988b598",
"assets/assets/images/body/Hair.svg": "b4e20332ca27e2b01432f6d0709cd0d9",
"assets/assets/images/body/Hips.svg": "b16d999140ffa6f10487cb92a09006ad",
"assets/assets/images/body/Knee.svg": "15950d743688279506454631e280aca7",
"assets/assets/images/body/Leg.svg": "702dcdd5aebfc5573c11d9d5cba6bf88",
"assets/assets/images/body/Lips.svg": "32b699794ac2f224a7c4d7e8d863d587",
"assets/assets/images/body/Nail.svg": "6b9529edcb2ea6f93db7d78d58f8c7eb",
"assets/assets/images/body/Neck.svg": "0478bb178cdeb534f3f0e0489c34d35d",
"assets/assets/images/body/Nose.svg": "430de0e704fbbbf83fc2f4a81fe52198",
"assets/assets/images/body/Palm.svg": "cb526a8ca95572f75507f9948018cdba",
"assets/assets/images/body/Shoulder.svg": "f776936d2867cac95a428fded277b052",
"assets/assets/images/body/Stomach.svg": "5bda62c3040203ffbbfe40a2acaf92bc",
"assets/assets/images/body/Teeth.svg": "d53d3830a5887c34d7c375507338d13e",
"assets/assets/images/body/Thigh.svg": "2d14b0723ae16fdb559ecae0d6cbedec",
"assets/assets/images/body/Thumb.svg": "41af2a42f6f9c6abd45352272cbf6bbe",
"assets/assets/images/body/Toe.svg": "91e35da9f5cb30b7f18ac04afd0d0af7",
"assets/assets/images/body/Tongue.svg": "b103efb065d19b135a090342ef65b5a6",
"assets/assets/images/body/Waist.svg": "7a09725fbb06402144051414fa7e1e70",
"assets/assets/images/body/Wrist.svg": "079003feb48c6c2c60f8e4199c6ed51d",
"assets/assets/images/dp.png": "761511d15d6149707f2874d0de082d93",
"assets/assets/images/email.svg": "68c6e924b585b3f3729c3682e9bb4445",
"assets/assets/images/flowers/carnation.svg": "ab8b4658fb73e4552139c2b57963016e",
"assets/assets/images/flowers/daffodil.svg": "1e3a08533edaa1bfc435b97de610ab1f",
"assets/assets/images/flowers/daisy.svg": "01c52b2b305b13a9ea21f397deedad7d",
"assets/assets/images/flowers/dandelion.svg": "c6c1a0f6e3266a46cc1ba57d454a2694",
"assets/assets/images/flowers/flower-icon.svg": "0a16d2e5cfb775a32affeb7af0a00087",
"assets/assets/images/flowers/flower_banner.jpeg": "05a92969f7af5a38fd89098c4f65c307",
"assets/assets/images/flowers/hibiscus.svg": "2966dc8620c3dd997cba6f385753d731",
"assets/assets/images/flowers/jasmine.svg": "ad62aca9623895361337b3913629f274",
"assets/assets/images/flowers/lavender.svg": "9dad53a3002488bc6c0445c01ea4c0df",
"assets/assets/images/flowers/lily.svg": "6512df892a34ca51ecbdaf24fe31c0f8",
"assets/assets/images/flowers/lotus.svg": "a753c728fa00d5bdfa5a93ed60d12fad",
"assets/assets/images/flowers/marigold.svg": "82f5b6aa108cf628d9141b34634cb6be",
"assets/assets/images/flowers/poppy.svg": "281fc9220566964320c9b55d630cb323",
"assets/assets/images/flowers/rose.svg": "314006d97d329d174f43de52a7de0e86",
"assets/assets/images/flowers/sunflower.svg": "9734fe4f7c1f3a022d4cc559b0e081a6",
"assets/assets/images/flowers/tulip.svg": "dc7de5b1abbee96deef93e9b580203a6",
"assets/assets/images/git.svg": "687ba049c5d18eb0b785d5251ad02845",
"assets/assets/images/github.svg": "6d10f267615e42f226aa7a9bb58f5917",
"assets/assets/images/gitlab.svg": "b20b9ca9f763e28ccab3df3d3fed3b66",
"assets/assets/images/icon_abc.png": "b1c391fb7a900a6e3f723eacc561339e",
"assets/assets/images/instagram.svg": "2341291ff887210d1f33d43b3a3a185c",
"assets/assets/images/linkedin.svg": "aaf0c5449034424cbee7a1b5ad308fb3",
"assets/assets/images/quiz.jpg": "7f1b8a41f963a36bf1772f28ce592dc1",
"assets/assets/images/rhymes/jingle.jpeg": "66ff8809f843ef4e5c24eca0d5d336e8",
"assets/assets/images/rhymes/twinkle.jpg": "879d9665fbc0a46b017dfa431400df29",
"assets/assets/images/shape.gif": "4012abeff3a11faff1dbef6efdf5b7f4",
"assets/assets/images/solar/earth.svg": "69dab14ebd4efc74d8c7abf48a3cd4bf",
"assets/assets/images/solar/jupiter.svg": "dc8a5bf75ccf7e5c79cc23f25bdf8c34",
"assets/assets/images/solar/mars.svg": "55f47fb86da389f61a14986617abccea",
"assets/assets/images/solar/mercury.svg": "1c036ed0d326246a65ea25d56ed65362",
"assets/assets/images/solar/neptune.svg": "878615ad7792ac2027251c6ccde1851b",
"assets/assets/images/solar/saturn.svg": "3aee4487450adbab9503fbaa85ad5866",
"assets/assets/images/solar/solar.gif": "be1c35e13075805e534ccb87ccc47779",
"assets/assets/images/solar/sun.svg": "93308f3c3b0fd582dfe937e762bea986",
"assets/assets/images/solar/uranus.svg": "06bc55238e1eb31fcf78adbbd61f1147",
"assets/assets/images/solar/venus.svg": "ccf56ddc5b12bbf1160d4a92dadf2a7b",
"assets/assets/images/studying.png": "2b7ba9fab56bf47212e90e2f3fe3c9cb",
"assets/assets/logo.png": "d5e41003d94ddc92d47a66c569fcc9b5",
"assets/assets/occupations/artist.svg": "566383da39ca6b2fb90f9fe054993f0c",
"assets/assets/occupations/author.svg": "fc94b923bfb90b9386ef1700dc33e995",
"assets/assets/occupations/barber.svg": "1263ec43f01ff8d36293587cbcb721a6",
"assets/assets/occupations/carpenter.svg": "d5cf71418bd5504f01fa95c9a25741e6",
"assets/assets/occupations/dentist.svg": "737b7efa5fbbceab9a79014f6289b2c8",
"assets/assets/occupations/doctor.svg": "18bbea2cc9bd248e29b492e16f616e04",
"assets/assets/occupations/electrician.svg": "eb77a04d1ec9aaf019b0895067c119ee",
"assets/assets/occupations/engineer.svg": "f341d53c0ad6ca5c5de33e9f6a2f3171",
"assets/assets/occupations/farmer.svg": "d40432eb56f2242433654ecb7df8f5ad",
"assets/assets/occupations/lawyer.svg": "3451f2077c2bcacffadef24fedc569eb",
"assets/assets/occupations/photographer.svg": "77e97a1b7eddd07005b85df5355f5e22",
"assets/assets/occupations/pilot.svg": "70163cd671c9e9cdde029d9836922b63",
"assets/assets/occupations/police.svg": "8c45705f3038c1af823f4c91b1f4ba71",
"assets/assets/occupations/teacher.svg": "90e112f4d52c3307f48eef4ccbf43e44",
"assets/assets/occupations/vet.svg": "1767b5acd259d266e54306a32a796223",
"assets/assets/quiz/q1.jpg": "c96d8dafb15bea658e427d8a5bcbb197",
"assets/assets/quiz/q10.jpg": "5bd0beb078375ef17484a1f6ec5d6429",
"assets/assets/quiz/q2.jpg": "f3e12b8f9c6af90c9c7aafdc8109df66",
"assets/assets/quiz/q5.jpg": "37ac53a984546a018af6053bbe67c1da",
"assets/assets/quiz/q6.jpg": "2fb8901a8c23b3fffd300e7c71f4db90",
"assets/assets/quiz/q7.jpg": "0402729fcf053c876034bf14548ca890",
"assets/assets/quiz/q8.jpg": "21d37bd99e98617cff0daa18003485c7",
"assets/assets/quiz/q9.jpg": "c3e151e2f02b37bd2223a26c22e782e0",
"assets/assets/rhymes/rhymes_cover.jpg": "c7754f3721052349fa944807c3fe25e6",
"assets/assets/rhymes/twinkle.jpeg": "b0e9b2849d1651d145890867600c4923",
"assets/assets/rhymes.json": "36c97f753cc8941c509de5e1ddd229e5",
"assets/assets/seasons/autumn.svg": "02a1c29ba2909105d52e1f3ed4de7221",
"assets/assets/seasons/spring.svg": "1c963b52830704f69efe489b3b1167a6",
"assets/assets/seasons/summer.svg": "ca027087d39c584f75e508bca09efede",
"assets/assets/seasons/winter.svg": "81d581b5e52406d82f04f7bcbc4e0b17",
"assets/assets/sounds/animals/bear_sound.mp3": "4497ee40997e46cf674fb8e776efca3b",
"assets/assets/sounds/animals/cat_sound.wav": "ea9562302771625692d1dd2215da45be",
"assets/assets/sounds/animals/cow_sound.mp3": "e9638aa51cf205bcd8286bf41f00b17a",
"assets/assets/sounds/animals/deer_sound.mp3": "21df640ad534765c36d9beb973430d07",
"assets/assets/sounds/animals/dog_sound.mp3": "fd96ea5e64f241379e9ea720f0280451",
"assets/assets/sounds/animals/elephant_sound.mp3": "24fdfce64102e45760a3d31e1a5cdba5",
"assets/assets/sounds/animals/fox_sound.mp3": "bdadf560d5bb2fd53232897b19606b90",
"assets/assets/sounds/animals/giraffe_sound.mp3": "d067a0ba10bb134fa3355baab3b333ea",
"assets/assets/sounds/animals/goat_sound.mp3": "1c2d4144a5b1f2e8f77e64756c1100ed",
"assets/assets/sounds/animals/horse_sound.mp3": "a122564c6f390091fc19244778eef80f",
"assets/assets/sounds/animals/kangaroo_sound.mp3": "dceb25a4ce660b39eb9139f70f674466",
"assets/assets/sounds/animals/lion_sound.mp3": "c14276971f114168120f15548b2178b8",
"assets/assets/sounds/animals/monkey_sound.mp3": "2d6178c2f6e462273f6f895471b1ea49",
"assets/assets/sounds/animals/pig_sound.mp3": "e60f05725df948a9feaa0bdc33293a5b",
"assets/assets/sounds/animals/rabbit_sound.mp3": "d56ab45ce19db2f4e89202128a5015aa",
"assets/assets/sounds/animals/sheep_sound.mp3": "9454a7f3537bd2e3842190f76386d76f",
"assets/assets/sounds/animals/snake_sound.mp3": "3c0f35f72df94b6eb3778f00e02bc16f",
"assets/assets/sounds/animals/squirrel_sound.mp3": "09c3f5e3800065f5d51b27856a048065",
"assets/assets/sounds/animals/tiger_sound.mp3": "28c359b740c76cc979e10f99fa9644f8",
"assets/assets/sounds/animals/zebra_sound.mp3": "7c3afe1067b42c7399abe4c2d614550d",
"assets/assets/sounds/birds/Bagula.mp3": "f2383d5fbc3025585400a5d9f0e5b419",
"assets/assets/sounds/birds/Baya.mp3": "1f0d03abe3694b9289abddac29c3f364",
"assets/assets/sounds/birds/Bulbul.mp3": "3e8ad70ae375a7bf65aa748c68da96ac",
"assets/assets/sounds/birds/Crow.mp3": "1ecdcf6f537ba26eeb7f23ce426e2d5f",
"assets/assets/sounds/birds/Duck.mp3": "9c6a57a269323772ca1c849819c8a8ec",
"assets/assets/sounds/birds/Eagle.mp3": "1832a69a890e3c3fc967a3ade37298ee",
"assets/assets/sounds/birds/Goose.mp3": "56a1a0cd39adf11dbaa1a9ed3f9a6fa7",
"assets/assets/sounds/birds/Hen.mp3": "c27450015e7a753ba3156e99ad766f28",
"assets/assets/sounds/birds/Hummingbird.mp3": "5bb6bbf399935789ae1f525c960a5d78",
"assets/assets/sounds/birds/Kingfisher.mp3": "4c8e174689d05cd8b315c531c271d44d",
"assets/assets/sounds/birds/Koel.mp3": "1f82c26a547da890149c07b12ae62c80",
"assets/assets/sounds/birds/Maina.mp3": "e1d213f75aa5d663b79540d8ef0d28b5",
"assets/assets/sounds/birds/Ostrich.mp3": "e8aedf82a5811fc41bbf2faf95120e3d",
"assets/assets/sounds/birds/Owl.mp3": "41f0997b0105b4554a883d5be2806be0",
"assets/assets/sounds/birds/Parrot.mp3": "dba1226c6c848f51f422e2a0e9691434",
"assets/assets/sounds/birds/Pigeon.mp3": "e1b36891197446986fb44429034790e3",
"assets/assets/sounds/birds/Robin.mp3": "0e9c94794dc0d98eefa3168eb31befe7",
"assets/assets/sounds/birds/Seagull.mp3": "1a74a5fe6f72b6f8e522b45a4a1acf3c",
"assets/assets/sounds/birds/Sparrow.mp3": "201ff20a4468fb262dcbb56688ba2fcf",
"assets/assets/sounds/birds/Swan.mp3": "0be1ca90bd84646e8ed3c220eee83427",
"assets/assets/sounds/birds/Vulture.mp3": "f046d1e8686f1751486542fca11e5104",
"assets/assets/sounds/birds/Woodpecker.mp3": "cc2c03bc8f31b0941732c1c53abb5103",
"assets/assets/sounds/rhymes/baba.mp3": "ab0ee9e805bbb9d345be8ee0aab63daf",
"assets/assets/sounds/rhymes/twinkle.mp3": "2371e16b74ab63178f19bc691de11bc1",
"assets/FontManifest.json": "5d4afdf2ce89d87207fccb3856f2c957",
"assets/fonts/MaterialIcons-Regular.otf": "94071818bafe6474a01edfc3905870f3",
"assets/NOTICES": "8c0ae822a638016c2385a945867a9a5a",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1f2546730db86817f8b0f2bfeecff8e0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7a379c0e3a3e939defa5bbdecfd0b0d5",
"/": "7a379c0e3a3e939defa5bbdecfd0b0d5",
"main.dart.js": "d779b664864c8966c8b241aba4f73251",
"manifest.json": "0f68df319f04ffb4026eb92c8d3495bc",
"version.json": "347ef51a6c2f006cee74d1422b62687c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
