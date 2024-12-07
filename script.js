function checkHasil() {
    const tahunInput = document.getElementById("tahun");
    const tahun = tahunInput.value;

    const now = new Date().getFullYear(); //bernilai tahun saat ini secara otomatis
    const age = now - tahun;

    const resultView = document.getElementById("resultView")
    resultView.innerHTML = "Usia anda saat ini adalah " + age
}