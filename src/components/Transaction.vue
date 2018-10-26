<template>
  <div class="transaction">
    <div class="content">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header text-uppercase bg-warning text-white">
                            Rút tiền về ngân hàng
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="form-group">
                                    <select class="form-control form-control-md">
                                        <option>--Chọn ngân hàng của bạn--</option>
                                        <option value="agri">Agribank</option>
                                        <option value="tb">TPBank</option>
                                        <option value="vietcom">Vietcombank</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="wihtdraw" placeholder="Số tiền rút(50.000đ-5.000.000đ)">
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="note" placeholder="Ghi chú rút tiền.">
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="passwithdraw" placeholder="Nhập mật khẩu của bạn.">
                                </div>
                                <div class="form-group">
                                    <input type="button" class="form-control text-uppercase btn btn-outline-warning text-gray-dark" id="passwithdraw" value="rút tiền">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header bg-danger text-white text-uppercase ">
                            Chuyển tiền trong website
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="phone" placeholder="SĐT nhận tiền.">
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="money-send" placeholder="Số tiền.">
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="content" placeholder="Nội dung chuyển tiền.">
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="password" placeholder="Điền mật khẩu đăng nhập của bạn.">
                                </div>
                                <div class="form-group">
                                    <input type="button" class="form-control btn btn-outline-danger text-uppercase" id="btnSendMoney" value="chuyển tiền">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Transaction',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
