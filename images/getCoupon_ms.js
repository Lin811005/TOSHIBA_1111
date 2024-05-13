var checkCouponNum = '';
var checkCouponMsg = '';
function sendCouponNum(cp_no){
  momoj().MomoLogin({GoCart:false, LoginSuccess:function() {
    if(checkCouponNum != cp_no){
      checkCouponNum = cp_no;
      var jsonData = new Object();
      jsonData.flag = '3002';
      jsonData.data = {
        cp_no: cp_no
      }
      momoj.ajax({
        type: 'POST',
        dataType: 'json',
        data: {data:JSON.stringify(jsonData)},
        url: '/servlet/MemberCenterServ',
        error: function(){
          alert('�k�ᥢ�ѡA�Э��s��J');
          checkCouponNum='';
        },
        success: function(objData){
          switch(objData.rtnCode) {
            case '101':
              alert('������k�ᦨ�\');
              checkCouponMsg = '����鸹��T�w�C�b��';
              break;
            case '210':
              alert('����鸹���s�b');
              checkCouponMsg = '����鸹���s�b';
              break;
            case '211':
              alert('����鸹����ϥ�');
              checkCouponMsg = '����鸹����ϥ�';
              break;
            case '212':
              alert('����鸹�w�ϥιL');
              checkCouponMsg = '����鸹�w�ϥιL';
              break;
            case '213':
              alert('����鸹��T�w�C�b��');
              checkCouponMsg = '����鸹��T�w�C�b��';
              break;
            case '214':
              alert('����鸹�w�L��');
              checkCouponMsg = '����鸹�w�L��';
              break;
            case '215':
              alert('����鸹�����\�ۦ�n��');
              checkCouponMsg = '����鸹�����\�ۦ�n��';
              break;
            case '301':
            case '998':
              alert('�k�ᥢ�ѡA�Э��s��J');
              checkCouponNum='';
              break;
          }
        }
      });
    }
    else{
      if(checkCouponMsg!=''){
        alert(checkCouponMsg);
      }
      else{
        alert('�t�ο��~�A�Э��s��z����');
      }
    }
  }}); 
}