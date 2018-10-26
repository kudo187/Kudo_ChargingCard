<template>
  <div class="history pending">
    <div class="container ">
        <ul class="nav nav-pills nav-justified pills-rounded ">
            <li class="nav-item">
                <a class="nav-link active font-weight-bold text-uppercase" data-toggle="tab" href="#chargingCard" role="tab">nạp thẻ</a>
            </li>
            <li class="nav-item">
                <a class="nav-link font-weight-bold text-uppercase" data-toggle="tab" href="#panelSendMoney" role="tab">chuyển tiền</a>
            </li>
            <li class="nav-item">
                <a class="nav-link font-weight-bold text-uppercase" data-toggle="tab" href="#panelSendMoney" role="tab">rút tiền về n.hàng</a>
            </li>
            <li class="nav-item">
                <a class="nav-link font-weight-bold text-uppercase" data-toggle="tab" href="#panelGiveMoney" role="tab">nhận tiền</a>
            </li>
        </ul>
        <!-- Tab panels -->
        <div class="tab-content pt-0">
            <!--Panel 1-->
            <div class="tab-pane fade in show active" id="chargingCard" role="tabpanel">
                <br>
                <div class="col-lg">
                    <div class="card">
                        <table id="example1" class="table table-striped table-bordered" style="width:100%">
                            <thead>
                                <tr>
                                    <th>T.Gian nạp</th>
                                    <th>Trạng thái</th>
                                    <th>Loại thẻ</th>
                                    <th>Mệnh giá</th>
                                    <th>Thực nhận</th>
                                    <th>Số Seri</th>
                                    <th>Mả thẻ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,3232</td>
                                    <td>$320,32</td>
                                </tr>
                                <tr>
                                    <td>Tiger dadas</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,32</td>
                                    <td>$320,321</td>
                                </tr>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,800</td>
                                    <td>$320,800</td>
                                </tr>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,800</td>
                                    <td>$320,800</td>
                                </tr>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,800</td>
                                    <td>$320,800</td>
                                </tr>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,800</td>
                                    <td>$320,800</td>
                                </tr>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,800</td>
                                    <td>$320,800</td>
                                </tr>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,800</td>
                                    <td>$320,800</td>
                                </tr>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,800</td>
                                    <td>$320,800</td>
                                </tr>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,800</td>
                                    <td>$320,800</td>
                                </tr>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,800</td>
                                    <td>$320,800</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>T.Gian nạp</th>
                                    <th>Trạng thái</th>
                                    <th>Loại thẻ</th>
                                    <th>Mệnh giá</th>
                                    <th>Thực nhận</th>
                                    <th>Số Seri</th>
                                    <th>Mả thẻ</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
            <!--/.Panel 1-->
            <!--Panel 2-->
            <div class="tab-pane fade" id="panelSendMoney" role="tabpanel">
                <br>
                <div class="col-lg">
                    <div class="card">
                        <table id="example2" class="table table-striped table-bordered" style="width:100%">
                            <thead>
                                <tr>
                                    <th>T.Gian</th>
                                    <th>Tr.thái</th>
                                    <th>Tiền</th>
                                    <th>Tên TK</th>
                                    <th>Số TK</th>
                                    <th>Ngân hàng</th>
                                    <th>C.Nhánh</th>
                                    <th>T.Nhắn</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,3232</td>
                                    <td>$320,32</td>
                                    <td>Edinburgh</td>
                                </tr>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,3232</td>
                                    <td>$320,32</td>
                                    <td>Edinburgh</td>
                                </tr>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,3232</td>
                                    <td>$320,32</td>
                                    <td>Edinburgh</td>
                                </tr>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,3232</td>
                                    <td>$320,32</td>
                                    <td>Edinburgh</td>
                                </tr>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,3232</td>
                                    <td>$320,32</td>
                                    <td>Edinburgh</td>
                                </tr>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,3232</td>
                                    <td>$320,32</td>
                                    <td>Edinburgh</td>
                                </tr>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,3232</td>
                                    <td>$320,32</td>
                                    <td>Edinburgh</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>T.Gian</th>
                                    <th>Tr.thái</th>
                                    <th>Tiền</th>
                                    <th>Tên TK</th>
                                    <th>Số TK</th>
                                    <th>Ngân hàng</th>
                                    <th>C.Nhánh</th>
                                    <th>T.Nhắn</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
            <!--/.Panel 2-->
            <!--Panel 3-->
            <div class="tab-pane fade" id="panelWithdrawl" role="tabpanel">
                <br>
                <div class="col-lg">
                    <div class="card">
                        <table id="example3" class="table table-striped table-bordered" style="width:100%">
                            <thead>
                                <tr>
                                    <th>T.Gian</th>
                                    <th>Tr.thái</th>
                                    <th>Tiền</th>
                                    <th>Tên TK</th>
                                    <th>Số TK</th>
                                    <th>Ngân hàng</th>
                                    <th>C.Nhánh</th>
                                    <th>T.Nhắn</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,3232</td>
                                    <td>$320,32</td>
                                    <td>Edinburgh</td>
                                </tr>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,3232</td>
                                    <td>$320,32</td>
                                    <td>Edinburgh</td>
                                </tr>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,3232</td>
                                    <td>$320,32</td>
                                    <td>Edinburgh</td>
                                </tr>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,3232</td>
                                    <td>$320,32</td>
                                    <td>Edinburgh</td>
                                </tr>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,3232</td>
                                    <td>$320,32</td>
                                    <td>Edinburgh</td>
                                </tr>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,3232</td>
                                    <td>$320,32</td>
                                    <td>Edinburgh</td>
                                </tr>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,3232</td>
                                    <td>$320,32</td>
                                    <td>Edinburgh</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>T.Gian</th>
                                    <th>Tr.thái</th>
                                    <th>Tiền</th>
                                    <th>Tên TK</th>
                                    <th>Số TK</th>
                                    <th>Ngân hàng</th>
                                    <th>C.Nhánh</th>
                                    <th>T.Nhắn</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
            <!--/.Panel 3-->
            <!--Panel 2-->
            <div class="tab-pane fade" id="panelGiveMoney" role="tabpanel">
                <br>
                <div class="col-lg">
                    <div class="card">
                        <table id="example4" class="table table-striped table-bordered" style="width:100%">
                            <thead>
                                <tr>
                                    <th>T.Gian</th>
                                    <th>Tr.thái</th>
                                    <th>Tiền</th>
                                    <th>Tên TK</th>
                                    <th>Số TK</th>
                                    <th>Ngân hàng</th>
                                    <th>C.Nhánh</th>
                                    <th>T.Nhắn</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,3232</td>
                                    <td>$320,32</td>
                                    <td>Edinburgh</td>
                                </tr>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,3232</td>
                                    <td>$320,32</td>
                                    <td>Edinburgh</td>
                                </tr>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,3232</td>
                                    <td>$320,32</td>
                                    <td>Edinburgh</td>
                                </tr>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,3232</td>
                                    <td>$320,32</td>
                                    <td>Edinburgh</td>
                                </tr>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,3232</td>
                                    <td>$320,32</td>
                                    <td>Edinburgh</td>
                                </tr>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,3232</td>
                                    <td>$320,32</td>
                                    <td>Edinburgh</td>
                                </tr>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,3232</td>
                                    <td>$320,32</td>
                                    <td>Edinburgh</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>T.Gian</th>
                                    <th>Tr.thái</th>
                                    <th>Tiền</th>
                                    <th>Tên TK</th>
                                    <th>Số TK</th>
                                    <th>Ngân hàng</th>
                                    <th>C.Nhánh</th>
                                    <th>T.Nhắn</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
            <!--/.Panel 4-->
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'History',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
