Berikut penjelasan yang tepat dan mudah dipahami dari program Kalkulator Pengeluaran Harian berdasarkan file `index.html` dan `script.js` yang kamu kirim. Penjelasan ini bisa digunakan untuk memahami kode sekaligus untuk presentasi di depan dosen.

# 1. Tujuan program

Program ini dibuat untuk membantu pengguna mengatur pengeluaran sehari-hari agar tidak melebihi anggaran yang telah ditentukan.

Fitur yang tersedia adalah:

1. Menyimpan anggaran harian.
2. Menambahkan nama dan nominal pengeluaran.
3. Menghitung total pengeluaran secara otomatis.
4. Menghitung sisa anggaran.
5. Menampilkan daftar pengeluaran.
6. Menghapus satu pengeluaran atau seluruh pengeluaran.
7. Memberikan peringatan jika total pengeluaran melebihi anggaran.

Contohnya, jika anggaran harian sebesar Rp50.000 dan pengguna mengeluarkan Rp15.000 untuk makan siang, program akan menghitung sisa anggaran menjadi Rp35.000.

# 2. Penjelasan file HTML (`index.html`)

HTML berfungsi sebagai kerangka atau tampilan utama website. HTML menentukan bagian-bagian yang muncul di layar dan tempat pengguna memasukkan data.

## A. Bagian awal HTML

```
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kalkulator Pengeluaran Harian</title>
    <link rel="stylesheet" href="style.css">
</head>
```

Penjelasannya:

- `<!DOCTYPE html>` menyatakan bahwa dokumen menggunakan HTML5.
- `<html lang="id">` menunjukkan bahwa bahasa halaman adalah bahasa Indonesia.
- `meta charset="UTF-8"` mendukung berbagai karakter dan simbol.
- `meta name="viewport"` membantu tampilan menyesuaikan ukuran layar perangkat.
- `<title>` menentukan judul halaman pada tab browser.
- `link rel="stylesheet"` menghubungkan HTML dengan file CSS untuk mengatur tampilan.

Catatan: File HTML ini memanggil `style.css`, tetapi file CSS tersebut tidak termasuk dalam dua file yang kamu kirim.

## B. Bagian isi website

```
<h1>Kalkulator Pengeluaran Harian</h1>
<p>Kelola pengeluaranmu agar lebih hemat!</p>
```

Bagian ini menampilkan judul program dan kalimat penjelas di halaman website.

Kemudian, terdapat beberapa bagian utama.

| Elemen                 | Fungsi                                         |
| ---------------------- | ---------------------------------------------- |
| `id="anggaran"`        | Tempat memasukkan anggaran harian              |
| `id="simpan"`          | Tombol untuk menyimpan anggaran                |
| `id="formPengeluaran"` | Formulir penambahan pengeluaran                |
| `id="nama"`            | Tempat memasukkan nama pengeluaran             |
| `id="nominal"`         | Tempat memasukkan jumlah uang yang dikeluarkan |
| `id="total"`           | Menampilkan total pengeluaran                  |
| `id="sisa"`            | Menampilkan sisa anggaran                      |
| `id="pesan"`           | Menampilkan pesan atau peringatan              |
| `id="daftar"`          | Menampilkan daftar pengeluaran                 |
| `id="hapusSemua"`      | Tombol untuk menghapus seluruh pengeluaran     |

Atribut `id` penting karena JavaScript menggunakannya untuk menemukan elemen HTML yang akan dibaca atau diubah.

## C. Menghubungkan HTML dengan JavaScript

```
<script src="script.js"></script>
```

Kode tersebut menghubungkan halaman HTML dengan file JavaScript. Dengan demikian, tombol-tombol dapat menjalankan fungsi, menghitung pengeluaran, dan memperbarui tampilan.

# 3. Penjelasan file JavaScript (`script.js`)

JavaScript berfungsi sebagai otak program. HTML menampilkan komponen, sedangkan JavaScript mengatur bagaimana komponen tersebut bekerja.

## A. Mengambil elemen HTML

```
const inputAnggaran = document.getElementById("anggaran");
const inputNama = document.getElementById("nama");
const inputNominal = document.getElementById("nominal");

const form = document.getElementById("formPengeluaran");
const daftar = document.getElementById("daftar");
const totalElement = document.getElementById("total");
const sisaElement = document.getElementById("sisa");
const pesan = document.getElementById("pesan");
```

Penjelasan:

`document.getElementById()` digunakan untuk mengambil elemen HTML berdasarkan `id`-nya.

Contohnya, `getElementById("anggaran")` mengambil kotak input anggaran dari HTML sehingga JavaScript bisa membaca angka yang dimasukkan pengguna.

Kata `const` digunakan untuk membuat variabel yang tidak dapat diberi ulang nilai referensinya.

## B. Menyimpan data anggaran dan pengeluaran

```
let anggaran = 0;
let pengeluaran = [];
```

- `anggaran = 0` berarti anggaran awal adalah nol.
- `pengeluaran = []` adalah array kosong untuk menyimpan daftar pengeluaran.

Array merupakan struktur data yang dapat menampung banyak data dalam satu variabel.

Ketika pengguna menambahkan pengeluaran, data nama dan nominalnya dimasukkan ke dalam array tersebut.

Contoh isi array:

```
[
    { nama: "Makan siang", nominal: 15000 },
    { nama: "Minum", nominal: 5000 }
]
```

Artinya, ada dua pengeluaran yang tersimpan: makan siang Rp15.000 dan minum Rp5.000.

## C. Mengubah angka menjadi format rupiah

```
function rupiah(angka) {
    return "Rp" + angka.toLocaleString("id-ID");
}
```

Fungsi `rupiah()` digunakan untuk menampilkan angka dalam format yang mudah dibaca sebagai uang.

Contohnya:

- Angka `50000` menjadi `Rp50.000`.
- Angka `15000` menjadi `Rp15.000`.

`toLocaleString("id-ID")` menyesuaikan format angka dengan kebiasaan penulisan angka di Indonesia.

## D. Menghitung total pengeluaran

```
function hitungTotal() {
    let total = 0;

    for (const item of pengeluaran) {
        total += item.nominal;
    }

    return total;
}
```

Fungsi `hitungTotal()` bertugas menjumlahkan seluruh pengeluaran yang tersimpan dalam array.

Cara kerjanya:

1. Variabel `total` dimulai dari nol.
2. Perulangan `for...of` membaca setiap data pengeluaran.
3. Nilai `item.nominal` ditambahkan ke `total`.
4. Setelah semua data dijumlahkan, fungsi mengembalikan hasilnya menggunakan `return`.

Contoh:

| Pengeluaran  | Nominal  |
| ------------ | -------- |
| Makan siang  | Rp15.000 |
| Minum        | Rp5.000  |
| Transportasi | Rp10.000 |
| Total        | Rp30.000 |

Jadi, hasil fungsi `hitungTotal()` adalah `30000`.

## E. Menampilkan dan memperbarui data

Fungsi `tampilkanData()` merupakan salah satu bagian terpenting dalam program.

```
function tampilkanData() {
    const total = hitungTotal();
    const sisa = anggaran - total;

    totalElement.textContent = rupiah(total);
    sisaElement.textContent = rupiah(sisa);
    sisaElement.style.color = sisa < 0 ? "red" : "green";
}
```

Penjelasannya:

- `hitungTotal()` menghitung seluruh pengeluaran.
- `anggaran - total` menghitung sisa anggaran.
- `textContent` mengubah teks yang ditampilkan di website.
- `sisaElement.style.color` mengubah warna sisa anggaran.

Jika sisa anggaran negatif, warnanya merah. Jika nol atau positif, warnanya hijau.

Contoh: Anggaran Rp50.000 dan total pengeluaran Rp30.000.

\\[ \text{Sisa} = 50.000 - 30.000 = 20.000 \\]

Hasilnya, sisa anggaran ditampilkan sebagai Rp20.000 dengan warna hijau.

Fungsi ini juga membuat daftar pengeluaran pada website diperbarui setiap kali data berubah.

## F. Menambahkan tombol hapus pada setiap pengeluaran

```
tombol.addEventListener("click", () => {
    pengeluaran.splice(index, 1);
    tampilkanData();
});
```

Kode ini dijalankan ketika tombol Hapus pada salah satu pengeluaran diklik.

- `addEventListener("click", ...)` mendeteksi klik pengguna.
- `splice(index, 1)` menghapus satu data dari array berdasarkan indeksnya.
- `tampilkanData()` memperbarui total, sisa anggaran, dan daftar setelah penghapusan.

Dengan demikian, pengguna bisa menghapus satu pengeluaran tanpa menghapus data lainnya.

## G. Menyimpan anggaran

```
document.getElementById("simpan").addEventListener("click", () => {
    if (inputAnggaran.value.trim() === "") {
        pesan.textContent = "Masukkan anggaran terlebih dahulu.";
        return;
    }

    const nilai = Number(inputAnggaran.value);

    if (!Number.isSafeInteger(nilai) || nilai < 0) {
        pesan.textContent = "Anggaran harus berupa angka bulat positif.";
        return;
    }

    anggaran = nilai;
    tampilkanData();
});
```

Bagian ini mengatur tombol Simpan Anggaran.

Urutan kerjanya:

1. Program memeriksa apakah kotak anggaran kosong.
2. `Number()` mengubah nilai input menjadi angka.
3. `Number.isSafeInteger()` memeriksa apakah nilai merupakan bilangan bulat yang aman.
4. Jika nilai negatif atau tidak valid, program menolak nilai tersebut.
5. Jika valid, nilai disimpan ke variabel `anggaran`.
6. `tampilkanData()` memperbarui hasil perhitungan.

Perlu diperhatikan, meskipun pesan validasi menyebut bilangan bulat positif, kode sebenarnya juga menerima nilai nol karena menggunakan pemeriksaan `nilai < 0`.

## H. Menambahkan pengeluaran baru

```
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nama = inputNama.value.trim();
    const nominal = Number(inputNominal.value);

    // Validasi data dilakukan di sini.

    pengeluaran.push({
        nama: nama,
        nominal: nominal
    });

    form.reset();
    tampilkanData();
});
```

Kode tersebut berjalan saat formulir pengeluaran dikirim.

- `submit` mendeteksi pengiriman formulir.
- `event.preventDefault()` mencegah halaman dimuat ulang secara otomatis.
- `trim()` menghapus spasi di awal dan akhir nama.
- `Number()` mengubah nominal menjadi angka.
- `push()` menambahkan pengeluaran ke array.
- `form.reset()` mengosongkan kembali kolom formulir.
- `tampilkanData()` memperbarui hasil perhitungan dan daftar.

Sebelum data dimasukkan ke array, program juga memeriksa agar nama tidak kosong dan nominal harus berupa bilangan bulat yang lebih besar dari nol.

## I. Menghapus seluruh pengeluaran

```
document.getElementById("hapusSemua").addEventListener("click", () => {
    pengeluaran = [];
    tampilkanData();
});
```

Saat tombol Hapus Semua diklik, array pengeluaran diganti dengan array kosong.

Akibatnya, semua pengeluaran dihapus dari daftar dan total pengeluaran kembali menjadi Rp0. Anggaran yang sudah disimpan tidak ikut dihapus.

## J. Menampilkan data saat halaman dibuka

```
tampilkanData();
```

Baris ini memanggil fungsi `tampilkanData()` saat JavaScript mulai dijalankan. Tujuannya agar ringkasan dan daftar pengeluaran langsung memiliki tampilan awal.

# 4. Contoh cara kerja program secara keseluruhan

Berikut simulasi penggunaan program.

## Simulasi kalkulator pengeluaran

Anggaran harian (Rp)

Nama pengeluaran

Nominal (Rp)

Tambah Pengeluaran

Total pengeluaran

## Rp 20.000

Sisa anggaran

## Rp 30.000

Pengeluaran masih dalam anggaran.

### Daftar pengeluaran

Makan siang

Rp15.000

Hapus

Minum

Rp5.000

Hapus

Hapus Semua

Simulasi interaktif untuk belajar; data di sini tidak disimpan secara permanen.

# 5. Alur kerja program

Mulai

Masukkan dan simpan anggaran harian

Masukkan nama dan nominal pengeluaran

Validasi data dan tambahkan ke array

Hitung total dan sisa anggaran

Tampilkan ringkasan, daftar, dan pesan

Selesai atau ulangi dengan data baru

# 6. Kesimpulan untuk presentasi

Program Kalkulator Pengeluaran Harian dibuat menggunakan HTML dan JavaScript, dengan CSS sebagai pengatur tampilan. HTML menyediakan input, tombol, dan bagian ringkasan. JavaScript mengolah data menggunakan variabel, array, fungsi, perulangan, kondisi, serta event listener.

Ketika pengguna menambahkan atau menghapus pengeluaran, program menghitung ulang total pengeluaran dan sisa anggaran secara otomatis. Jika total pengeluaran melebihi anggaran, program menampilkan peringatan berwarna merah. Dengan demikian, program membantu pengguna memantau pengeluaran harian secara sederhana dan mudah dipahami.

Catatan teknis: Pada kode yang kamu kirim, data masih disimpan dalam variabel JavaScript, bukan dalam penyimpanan permanen. Jadi, jika halaman dimuat ulang, data anggaran dan pengeluaran akan kembali ke nilai awal.
