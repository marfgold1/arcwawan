import KruImage from "../images/wawanKru.jpg";
import KakVielImg from "../images/kakviel.jpg";
import CakruImage1 from "../images/wawanCakru.jpg";
import JereImg from "../images/jere.jpg";
import FazaImg from "../images/faza.png";
import KakFakhryImg from "../images/kakfakhry.png";
import FawwazImg from "../images/fawwaz.png";

export const dataWawan = [
    {
        title: "Wawancara Kru Day 1",
        slug: "kru",
        image: KruImage,
        content: [
            {
                slug: "kak-viel",
                nama: "Steven Nataniel (Kak vL)",
                image: KakVielImg,
                body:
                    `Jurusan: Teknik Informatika '19\nARC: Biasanya ARC buat tempat-tempat naruh proyek. ARC sekarang gabanyak proyek sih tapi karena online yak.\n
                    Magang: Bahasa pemrograman di magang/proyek ga bisa digenelisir, framework juga gapenting yang penting kerjaannya selesai. Tapi biasanya sekarang pada pake Java, Golang, Python, JS, dan ada juga yang lain sih. Design pattern di OOP juga jangan lupa. Magang front end biasanya kurang dihargai karena front end hanya nilai plus. Magang itu kaya impossible di ITB karena biasanya 3 bulan. Kita juga harus bertanggung jawab buat ngikut magang/proyek karena bakal berdampak sama reputasi. Kalo magang juga jauh2 hari siapinnya, dan juga planning waktu penting karena jadwal bakal bentrok.\n
                    IF: IF tuh punya tubes-tubes yang banyak disuruh buat eksplor sendiri. Materinya juga dikit jadinya bener-bener mau nyari. Contohnya kaya bikin operating system gitu. Ada matkulnya lah. Eksplorasi sendiri juga bisa ngebantu pemahaman materi. Biasanya sih liburan usahakan eksplorasi sendiri materinya, soalnya gabakal ada waktu lagi.
                    `
            }
        ]
    },
    {
        title: "Wawancara Ca-Kru Day 2",
        slug: "cakru",
        image: CakruImage1,
        content: [
            {
                slug: "jere",
                nama: "Jeremiah Alfa Reynaldo (Jere/Reyn)",
                image: JereImg,
                body:
                    `Fakultas/Jurusan: FMIPA20 (Peminatan Astronomi)	
                    Tempat Tinggal: Batam	
                    Alasan ikut ARC: pengen nambah skill web-dev, programming in general.
                    Rangkuman Wawan:	
                    - Mata kuliah khusus FMIPA, ya pengenalan jurusan di FMIPA.	
                    - Astronomi ngapain? Emgnya jadi astronot? Ngga juga, jere lebih mau jadi astrofisikawan teoritis daripada terapan. Waktu SMP suka belajar kosmologi (alam semesta). Data Science juga penting karena data dari pengamatan astronomi harus diolah pake komputer.	
                    - Astrofisikawan terapan gitu kaya aplikasi dari astronomi dibikin ke dunia nyata, contohnya kaya analisis data buat biologi, atau data science, atau bisa juga aplikasi teknologi yang sebelumnya dipakai untuk keperluan astronomi tapi dikembangkan untuk keperluan kehidupan sehari-hari (contohnya dulu itu kamera smartphone).		
                    - Pengennya sih jadi scientist di Indonesia, soalnya ya kaya resah gitu sama pola pikir masyarakat Indonesia, jadi mau ningkatin scientific thinking (logis, rasional, objektif, dsb.) gitu sih, khususnya di Indonesia.
                    `
            },
            {
                slug: "asro",
                nama: "Faza Muhandisa Asro (Faza/Asro)",
                image: FazaImg,
                body:
                    `Fakultas/Jurusan: STEI 20 (mau masuk STI)	
                    Tempat Tinggal: Bandung	
                    Alasan ikut ARC: mau belajar aja sih, sama lah.

                    Rangkuman Wawan:	
                    - Kenapa masuk STI daripada IF? Karena pengen belajar lebih luas dan bisa “santai”. Kurikulumnya juga variatif dan bebas.	
                    - Gimana di Bandung, tapi gabisa ke ITB karena online? Ya ga enak sih, tapi waktu itu sempet ke ITB, cuma ya diusir gitu karena masih pandemi. Cuma itu sekali sih pengalaman ke ITB setelah jadi maba. Intinya ga enak aja. Pernah juga sih lari-lari di parkiran saraga, gaboleh masuk saraga tapi x(	
                    - Habis STI mau kerja di perusahaan ternama gitu, information technology management consulting atau accenture lah. Pengennya sih di perusahaan tua gitu biar stabil. 
                    `
            },
            {
                slug: "kak-fakhry",
                nama: "M. Fakhry Malta (Kak Fakhry)",
                image: KakFakhryImg,
                body:
                `Jurusan: Teknik Informatika 19	
                Tempat Tinggal: Aceh	
                Alasan ikut ARC: Baru jadi cakru ‘21 ARC karena baru tahu ada ARC.
                Rangkuman Wawan:	
                - Matkul IF sem. 4: mostly terkait matematika dan lainnya ngoding	
                - Lagi chaos tubes (sementara ada 5 matkul)	
                - Di IF kebanyakan ngoding di sem 4, tapi sem 3 belajar matematika. Biasanya pakai C++, tapi kadang juga pake python. Ada juga bikin web pakai HTML dan CSS.
                - Pengalaman waktu TPB, keos di PAR gitu, sama Daspro. Ya biasa-biasa aja sih.	
                - Nanti kedepannya masih bingung sih mau kemana, soalnya kaya arahnya IF itu kemana-mana. Waktu liburan bakal nyoba magang biar terbiasa di dunia kerja (dan dapat duit xD).
                `
            },
            {
                slug: "fawwaz",
                nama: "Muhammad Hilmi Fawwaz (Fawwaz)",
                image: FawwazImg,
                body:
                `Fakultas/Jurusan: STEI 20 (Peminatan Telekomunikasi)	
                Tempat Tinggal: Balikpapan, Kaltim	
                Alasan ikut ARC: Penasaran aja sama community webdev. Ikut-ikut yang lain juga kaya DSC.	
                Hobi: nonton anime.
                Rangkuman Wawan:	
                - Di telekomunikasi sukanya telematika atau radar? Sukanya telematika	
                - Masuk peminatan telekomunikasi sebenarnya karena pengen STEI, tapi tertarik juga dengan telekomunikasi.	
                - Ikut unit apa aja? Aksantara (pengen departemen telemetry, kaya radio gitu), Solve it, ARC
                - Pengen kerja di perusahaan telekomunikasi (telkom, xl, indosat, dkk) dan mungkin jadi pemimpin disana sih : 3
                `
            }
        ]
    }
]