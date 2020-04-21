
# 뷰에서 아임포트 본인인증 연동하기

뷰 환경에서 아임포트 본인인증 연동을 위한 안내입니다.

## 1. 가맹점 식별하기

`IMP` 객체의 `init` 함수 첫번째 인자에 `가맹점 식별코드`를 추가합니다.

```javascript
const { IMP } = window;
IMP.init('imp00000000'); // 'imp00000000' 대신 발급받은 가맹점 식별코드를 사용합니다.
```

가맹점 식별코드는 <a href="https://admin.iamport.kr" target="_blank">아임포트 관리자 페이지</a> 로그인 후, 시스템 설정 > 내정보에서 확인하실 수 있습니다.

## 2. 본인인증 데이터 정의하기

본인인증에 필요한 데이터를 아래와 같이 정의합니다. 이때 정의한 데이터는 `IMP.certification` 함수 호출시, 첫번째 인자로 전달됩니다. 본인인증 데이터에 대한 보다 자세한 내용은 <a href="https://docs.iamport.kr/tech/mobile-authentication#call-authentication" target="_blank">아임포트 공식 문서</a>를 참고하세요.

```javascript
const data = {
  merchant_uid: `mid_${new Date().getTime()}`  // 주문번호
  company: '아임포트',                           // 회사명 또는 URL
  carrier: 'SKT',                              // 통신사
  name: '홍길동',                                // 이름
  phone: '01012341234',                        // 전화번호
  ...
};
```

## 3. 콜백 함수 정의하기

본인인증 후 실행될 로직을 콜백 함수로 정의합니다. 이때 정의한 함수는 `IMP.certification` 함수 호출시, 두번째 인자로 전달됩니다. 콜백 함수의 첫번째 인자로 본인인증 결과가 객체의 형태로 전달됩니다.

```javascript
callback(response) {
  const {
    success,
    merchant_uid,
    error_msg,
    ...
  } = response;

  if (success) {
    alert('본인인증 성공');
  } else {
    alert(`본인인증 실패: ${error_msg}`);
  }
}
```

## 4. 본인인증 창 호출하기

본인인증 하기 버튼을 눌렀을때 `IMP` 객체의 `certification` 함수를 호출해 본인인증 창을 호출합니다. `certification` 함수의 첫번째 인자로는 2에서 정의한 `본인인증 데이터`를, 두번째 인자로는 3에서 정의한 `콜백 함수`를 전달합니다.

```html
<template>
  <div>
    <button @click="onCertification">
      본인인증
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    onCertification() {
      /* 1. 가맹점 식별하기 */
      const { IMP } = window;
      IMP.init('imp00000000');

      /* 2. 본인인증 데이터 정의하기 */
      const data = {
        merchant_uid: `mid_${new Date().getTime()}`  // 주문번호
        company: '아임포트',                           // 회사명 또는 URL
        carrier: 'SKT',                              // 통신사
        name: '홍길동',                                // 이름
        phone: '01012341234',                        // 전화번호
        ...
      };

      /* 4. 본인인증 창 호출하기 */
      IMP.certification(data, this.callback);
    },
    callback(response) {
      /* 3. 콜백 함수 정의하기 */
      const {
        success,
        merchant_uid,
        error_msg,
        ...
      } = response;

      if (success) {
        alert('본인인증 성공');
      } else {
        alert(`본인인증 실패: ${error_msg}`);
      }
    },
  },
};
</script>
```