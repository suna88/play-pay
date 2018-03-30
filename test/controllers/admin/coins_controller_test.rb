require 'test_helper'

class Admin::CoinsControllerTest < ActionDispatch::IntegrationTest
  test "should get edit" do
    get admin_coins_edit_url
    assert_response :success
  end

end
