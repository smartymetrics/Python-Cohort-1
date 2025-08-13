/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  NonfungiblePositionManager,
  NonfungiblePositionManager_Approval,
  NonfungiblePositionManager_ApprovalForAll,
  NonfungiblePositionManager_Collect,
  NonfungiblePositionManager_DecreaseLiquidity,
  NonfungiblePositionManager_IncreaseLiquidity,
  NonfungiblePositionManager_Transfer,
} from "generated";

NonfungiblePositionManager.Approval.handler(async ({ event, context }) => {
  const entity: NonfungiblePositionManager_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    approved: event.params.approved,
    tokenId: event.params.tokenId,
  };

  context.NonfungiblePositionManager_Approval.set(entity);
});

NonfungiblePositionManager.ApprovalForAll.handler(async ({ event, context }) => {
  const entity: NonfungiblePositionManager_ApprovalForAll = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    operator: event.params.operator,
    approved: event.params.approved,
  };

  context.NonfungiblePositionManager_ApprovalForAll.set(entity);
});

NonfungiblePositionManager.Collect.handler(async ({ event, context }) => {
  const entity: NonfungiblePositionManager_Collect = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    tokenId: event.params.tokenId,
    recipient: event.params.recipient,
    amount0: event.params.amount0,
    amount1: event.params.amount1,
  };

  context.NonfungiblePositionManager_Collect.set(entity);
});

NonfungiblePositionManager.DecreaseLiquidity.handler(async ({ event, context }) => {
  const entity: NonfungiblePositionManager_DecreaseLiquidity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    tokenId: event.params.tokenId,
    liquidity: event.params.liquidity,
    amount0: event.params.amount0,
    amount1: event.params.amount1,
  };

  context.NonfungiblePositionManager_DecreaseLiquidity.set(entity);
});

NonfungiblePositionManager.IncreaseLiquidity.handler(async ({ event, context }) => {
  const entity: NonfungiblePositionManager_IncreaseLiquidity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    tokenId: event.params.tokenId,
    liquidity: event.params.liquidity,
    amount0: event.params.amount0,
    amount1: event.params.amount1,
  };

  context.NonfungiblePositionManager_IncreaseLiquidity.set(entity);
});

NonfungiblePositionManager.Transfer.handler(async ({ event, context }) => {
  const entity: NonfungiblePositionManager_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    tokenId: event.params.tokenId,
  };

  context.NonfungiblePositionManager_Transfer.set(entity);
});
