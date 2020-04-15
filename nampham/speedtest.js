var obj = JSON.parse($response.body);
var bundle_id = obj.receipt["bundle_id"];

if(bundle_id == "com.speed.test.internet")
{
obj = {
  "status": 0,
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "app_item_id": 1452824281,
    "receipt_creation_date": "2020-03-23 14:32:10 Etc/GMT",
    "bundle_id": "com.speed.test.internet",
    "original_purchase_date": "2020-03-23 07:25:50 Etc/GMT",
    "in_app": [
      {
        "quantity": "1",
        "purchase_date_ms": "1584948605000",
        "expires_date": "2029-03-26 07:30:05 Etc/GMT",
        "expires_date_pst": "2029-03-26 00:30:05 America/Los_Angeles",
        "is_in_intro_offer_period": "false",
        "transaction_id": "160000705687132",
        "is_trial_period": "true",
        "original_transaction_id": "160000705687132",
        "purchase_date": "2020-03-23 07:30:05 Etc/GMT",
        "product_id": "com.speed.test.internet.subscription.year",
        "original_purchase_date_pst": "2020-03-23 00:30:05 America/Los_Angeles",
        "original_purchase_date_ms": "1584948605000",
        "web_order_line_item_id": "160000251858663",
        "expires_date_ms": "1869230179000",
        "purchase_date_pst": "2020-03-23 00:30:05 America/Los_Angeles",
        "original_purchase_date": "2020-03-23 07:30:05 Etc/GMT"
      }
    ],
    "adam_id": 1452824281,
    "receipt_creation_date_pst": "2020-03-23 07:32:10 America/Los_Angeles",
    "request_date": "2020-03-23 14:32:49 Etc/GMT",
    "request_date_pst": "2020-03-23 07:32:49 America/Los_Angeles",
    "version_external_identifier": 834500658,
    "request_date_ms": "1584973969009",
    "original_purchase_date_pst": "2020-03-23 00:25:50 America/Los_Angeles",
    "application_version": "3",
    "original_purchase_date_ms": "1584948350000",
    "receipt_creation_date_ms": "1584973930000",
    "original_application_version": "3",
    "download_id": 36067529717568
  },
  "pending_renewal_info": [
    {
      "product_id": "com.speed.test.internet.subscription.year",
      "original_transaction_id": "160000705687132",
      "auto_renew_product_id": "com.speed.test.internet.subscription.year",
      "auto_renew_status": "0"
    }
  ],
  "latest_receipt_info": [
    {
      "quantity": "1",
      "purchase_date_ms": "1584948605000",
      "expires_date": "2029-03-26 07:30:05 Etc/GMT",
      "expires_date_pst": "2029-03-26 00:30:05 America/Los_Angeles",
      "is_in_intro_offer_period": "false",
      "transaction_id": "160000705687132",
      "is_trial_period": "true",
      "original_transaction_id": "160000705687132",
      "purchase_date": "2020-03-23 07:30:05 Etc/GMT",
      "product_id": "com.speed.test.internet.subscription.year",
      "original_purchase_date_pst": "2020-03-23 00:30:05 America/Los_Angeles",
      "subscription_group_identifier": "20516767",
      "original_purchase_date_ms": "1584948605000",
      "web_order_line_item_id": "160000251858663",
      "expires_date_ms": "1869230179000",
      "purchase_date_pst": "2020-03-23 00:30:05 America/Los_Angeles",
      "original_purchase_date": "2020-03-23 07:30:05 Etc/GMT"
    }
  ],
  "latest_receipt": "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"
}
$done({body: JSON.stringify(obj)});