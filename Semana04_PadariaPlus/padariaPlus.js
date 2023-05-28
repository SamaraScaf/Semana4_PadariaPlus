class CaixaRegistradora {
    constructor() {
      this.stock = [];
      this.client = '';
      this.checkout = [];
    }
  
    adicionarProduto(barcode, price, name) {
      const product = {
        barcode: barcode,
        price: price,
        name: name,
        quantity: 0
      };
      this.stock.push(product);
    }
  
    iniciarAtendimento(client) {
        this.client = client;
      }
  
    adicionarItem(barcode, quantity) {
      const product = this.stock.find(item => item.barcode === barcode);
      if (product) {
        product.quantity += quantity;
        this.checkout.push(product);
      } else {
        console.log('Produto não encontrado no estoque.');
      }
    }
  
    calcularValorTotal() {
      let total = 0;
      for (const product of this.checkout) {
        total += product.price * product.quantity;
      }
      return total;
    }
  
    // Estoque(stock){
    // const stock = [
    //     {
    //       barcode: 1,
    //       name: "Capuccino de chocolate",
    //       price: 8.90,
    //       quantity: 10,
    //     },
      
    //     {
    //       barcode: 2,
    //       name: "Bolo de fubá",
    //       price: 4.90,
    //       quantity: 5,
    //     },

    //     {
    //         barcode: 3,
    //         name: "Pão de quejo recheado",
    //         price: 8.90,
    //         quantity: 10,
    //       },
        
    //       {
    //         barcode: 4,
    //         name: "Café Expresso médio",
    //         price: 7.00,
    //         quantity: 10,
    //       },

    //       {
    //         barcode: 5,
    //         name: "Pão Francês",
    //         price: 14.99,
    //         quantity: 15,
    //       }
    // ];
    // }

    // atualizarEstoque(){
    //     const estoque = this.stock - checkout
    // }

    // opcaodePagamento(){
    //     money
    //     cartão de crédito
    //     cartão de débito
    //     PIX
    // }

    fecharConta(money) { //formaDePagamento
      const total = this.calcularValorTotal();
      const troco = money - total;
      if (troco >= 0) {
        console.log(`Cliente: ${this.client}`);
        console.log(`Total: R$${total.toFixed(2)}`);
        console.log(`Dinheiro recebido: R$${money.toFixed(2)}`);
        console.log(`Troco: R${troco.toFixed(2)}`);
        this.checkout = [];
      } else {
        console.log('Dinheiro insuficiente.');
      }
    }
  }
  
  //Testando:
  const checkout = new CaixaRegistradora();
  checkout.adicionarProduto(1, 8.90, 'Capuccino de chocolate');
  checkout.adicionarProduto(2, 4.90, 'Bolo de Fubá');
  checkout.adicionarProduto(3, 8.90, 'Pão de queijo recheado');
  checkout.adicionarProduto(4, 7.00, 'Café Expresso médio');
  checkout.adicionarProduto(5, 14,99, 'Pão Francês');
  checkout.iniciarAtendimento('Samara');
  checkout.adicionarItem(1, 2);
  checkout.adicionarItem(2, 1);
  checkout.adicionarItem(3, 2);
  checkout.adicionarItem(4, 1);
  checkout.adicionarItem(5, 0.7);
  console.log('Total: R$', checkout.calcularValorTotal());
  checkout.fecharConta(100);