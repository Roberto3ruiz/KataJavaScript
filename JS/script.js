var cuentas = [
    { nombre: "Mali", saldo: 200 },
    { nombre: "Gera", saldo: 290 },
    { nombre: "Maui", saldo: 67 },
  ];

  var selectedAccountIndex;
  var selectedAccount;

  function checkPassword() {
    var password = document.getElementById("password").value;
    if (password === "1234") {
      // Contraseña temporal para simplificar
      document.getElementById("passwordForm").style.display = "none";
      document.getElementById("options").style.display = "block";
      selectedAccount = cuentas[selectedAccountIndex];
      document.getElementById("saldo").innerText =
        "Saldo actual: $" + selectedAccount.saldo.toFixed(2);
    } else {
      document.getElementById("message").innerText =
        "Contraseña incorrecta. Inténtelo de nuevo.";
    }
  }

  function consultarSaldo() {
    document.getElementById("result").style.display = "block";
    document.getElementById("message").innerText = "";
    document.getElementById("saldo").innerText =
      "Saldo actual: $" + selectedAccount.saldo.toFixed(2);
  }

  function ingresarMonto() {
    var amount = parseFloat(prompt("Ingrese el monto a ingresar:"));
    if (!isNaN(amount) && amount > 0) {
      selectedAccount.saldo += amount;
      updateBalance();
      document.getElementById("message").innerText =
        "Se ha ingresado $" + amount.toFixed(2);
    } else {
      document.getElementById("message").innerText = "Monto inválido.";
    }
  }

  function retirarMonto() {
    var amount = parseFloat(prompt("Ingrese el monto a retirar:"));
    if (
      !isNaN(amount) &&
      amount > 0 &&
      amount <= selectedAccount.saldo - 10 &&
      selectedAccount.saldo - amount >= 10
    ) {
      selectedAccount.saldo -= amount;
      updateBalance();
      document.getElementById("message").innerText =
        "Se ha retirado $" + amount.toFixed(2);
    } else {
      document.getElementById("message").innerText =
        "Monto inválido o excede el límite de saldo.";
    }
  }

  function updateBalance() {
    document.getElementById("saldo").innerText =
      "Saldo actual: $" + selectedAccount.saldo.toFixed(2);
  }

  document
    .getElementById("cuentas")
    .addEventListener("change", function () {
      selectedAccountIndex = this.value;
      document.getElementById("passwordForm").style.display = "block";
      document.getElementById("options").style.display = "none";
      document.getElementById("result").style.display = "none";
    });