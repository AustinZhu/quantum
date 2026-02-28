SELECT add_retention_policy('datafeed.ticks', 2592000000::BIGINT, if_not_exists => TRUE);
SELECT add_compression_policy('datafeed.bars_1m', 604800000::BIGINT, if_not_exists => TRUE);
SELECT add_compression_policy('datafeed.bars_5m', 604800000::BIGINT, if_not_exists => TRUE);

ALTER TABLE datafeed.bars_1m SET (
  timescaledb.compress,
  timescaledb.compress_segmentby = 'symbol'
);

ALTER TABLE datafeed.bars_5m SET (
  timescaledb.compress,
  timescaledb.compress_segmentby = 'symbol'
);
