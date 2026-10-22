const inputAnggaran = document.getElementById("anggaran");
const inputNama = document.getElementById("nama");
const inputNominal = document.getElementById("nominal");

const form = document.getElementById("formPengeluaran");
const daftar = document.getElementById("daftar");
const totalElement = document.getElementById("total");
const sisaElement = document.getElementById("sisa");
const pesan = document.getElementById("pesan");

let anggaran = 0;
let pengeluaran = [];

function rupiah(angka) {
    return "Rp" + angka.toLocaleString("id-ID");
}

function hitungTotal() {
    let total = 0;

    for (const item of pengeluaran) {
        total += item.nominal;
    }

    return total;
}

function tampilkanData() {
    const total = hitungTotal();
    const sisa = anggaran - total;

    totalElement.textContent = rupiah(total);
    sisaElement.textContent = rupiah(sisa);
    sisaElement.style.color = sisa < 0 ? "red" : "green";

    daftar.replaceChildren();

    pengeluaran.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.nama} - ${rupiah(item.nominal)} `;

        const tombol = document.createElement("button");
        tombol.textContent = "Hapus";

        tombol.addEventListener("click", () => {
            pengeluaran.splice(index, 1);
            tampilkanData();
        });

        li.appendChild(tombol);
        daftar.appendChild(li);
    });

    if (pengeluaran.length === 0) {
        const li = document.createElement("li");
        li.textContent = "Belum ada pengeluaran.";
        daftar.appendChild(li);
    }

    if (total > anggaran) {
        pesan.textContent = "Peringatan: Anggaran terlampaui!";
        pesan.style.color = "red";
    } else {
        pesan.textContent = "Pengeluaran masih dalam anggaran.";
        pesan.style.color = "green";
    }
}

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

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nama = inputNama.value.trim();
    const nominal = Number(inputNominal.value);

    if (nama === "") {
        pesan.textContent = "Nama pengeluaran harus diisi.";
        return;
    }

    if (
        inputNominal.value.trim() === "" ||
        !Number.isSafeInteger(nominal) ||
        nominal <= 0
    ) {
        pesan.textContent = "Nominal harus lebih dari nol.";
        return;
    }

    pengeluaran.push({
        nama: nama,
        nominal: nominal
    });

    form.reset();
    tampilkanData();
});

document.getElementById("hapusSemua").addEventListener("click", () => {
    pengeluaran = [];
    tampilkanData();
});

tampilkanData();