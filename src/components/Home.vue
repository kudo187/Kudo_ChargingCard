<template>
  <div class="home">
    <div class="content">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header text-uppercase bg-info text-white">
                            Chiếc khấu đổi thẻ
                        </div>
                        <div class="card-body">
                            <table class="table table-bordered ">
                                <thead class="thead-dark">
                                    <tr>
                                        <th>Loại thẻ</th>
                                        <th>Chiếc khấu</th>
                                        <th>Tình trạng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Viettel</td>
                                        <td>20%</td>
                                        <td class="bg-success text-white">Hoạt động</td>
                                    </tr>
                                    <tr>
                                        <td>Mobiphone</td>
                                        <td>25%</td>
                                        <td class="bg-danger text-white">Đang bảo trì</td>
                                    </tr>
                                    <tr>
                                        <td>Vinaphone</td>
                                        <td>15%</td>
                                        <td class="bg-success text-white">Hoạt động</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header bg-warning text-white text-uppercase ">
                            Đổi thẻ cào thành Gold
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="form-group">
                                    <select class="form-control form-control-md">
                                        <option>--Chọn loại thẻ--</option>
                                        <option value="viettel">Viettel</option>
                                        <option value="mobi">Mobiphone</option>
                                        <option value="vina">Vinaphone</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <select class="form-control form-control-md">
                                        <option>--Chọn mệnh giá--</option>
                                        <option value="10">10,000</option>
                                        <option value="20">20,000</option>
                                        <option value="100">100,000</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="seri" placeholder="Seri">
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="id-card" placeholder="Mã thẻ">
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
  name: 'Home',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
