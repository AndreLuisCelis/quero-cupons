renderCupons();
async function getCupons() {
    let response = await fetch('http://sandbox-api.lomadee.com/v2/1641670432148a9d1bff9/coupon/_all?sourceId=37341291');
    let responseJson = await response.json();
    let cupons = responseJson.coupons;
    return cupons;
}

async function renderCupons() {
    let cupons = await getCupons();
    let container = document.getElementById('container');

    for (const cupom of cupons) {
        let card = document.createElement('div');
        card.className = 'card';

        let cardDescricao = document.createElement('p');
        cardDescricao.textContent = cupom.description;

        let cardImg = document.createElement('img');
        cardImg.src = cupom.store.image;

        let cardLink = document.createElement('a');
        cardLink.textContent = 'Pegar Cupom';
        cardLink.href = cupom.link;
        cardLink.target = '_blank'

        card.append(cardImg);
        card.append(cardDescricao);
        card.append(cardLink);
        container.append(card);

    }
}