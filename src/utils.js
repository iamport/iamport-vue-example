import {
  METHODS_FOR_INICIS,
  METHODS_FOR_KCP,
  METHOD_FOR_CARD,
  METHODS_FOR_UPLUS,
  METHOD_FOR_PHONE,
  METHODS_FOR_MOBILIANS,
  METHOD_FOR_VBANK,
  QUOTAS,
} from './constants';

function getUserCodeByPg(pg) {
  switch (pg) {
    case 'kakao':
      return 'imp10391932';
    case 'paypal':
      return 'imp09350031';
    case 'mobilians':
      return 'imp60029475';
    case 'naverco':
    case 'naverpay':
      return 'imp41073887';
    default:
      return 'imp19424728';
  }
}

function getMethodsByPg(pg = 'html5_inicis') {
  switch (pg) {
    case 'html5_inicis':
      return METHODS_FOR_INICIS;
    case 'kcp':
      return METHODS_FOR_KCP;
    case 'kcp_billing':
    case 'kakaopay':
    case 'kakao':
    case 'paypal':
    case 'payco':
    case 'smilepay':
      return METHOD_FOR_CARD;
    case 'uplus':
      return METHODS_FOR_UPLUS;
    case 'danal':
      return METHOD_FOR_PHONE;
    case 'mobilians':
      return METHODS_FOR_MOBILIANS;
    case 'settle':
      return METHOD_FOR_VBANK;
    default:
      return METHODS_FOR_INICIS;
  }
}

function getQuotaByPg(pg = 'html5_inicis') {
  switch (pg) {
    case 'html5_inicis':
    case 'kcp':
      return QUOTAS.concat(['2', '3', '4', '5', '6']);
    default:
      return QUOTAS;
  }
}

export default {
  getUserCodeByPg,
  getMethodsByPg,
  getQuotaByPg,
};
