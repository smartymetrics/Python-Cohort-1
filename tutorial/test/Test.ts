import assert from "assert";
import { 
  TestHelpers,
  NonfungiblePositionManager_Approval
} from "generated";
const { MockDb, NonfungiblePositionManager } = TestHelpers;

describe("NonfungiblePositionManager contract Approval event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for NonfungiblePositionManager contract Approval event
  const event = NonfungiblePositionManager.Approval.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("NonfungiblePositionManager_Approval is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await NonfungiblePositionManager.Approval.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualNonfungiblePositionManagerApproval = mockDbUpdated.entities.NonfungiblePositionManager_Approval.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedNonfungiblePositionManagerApproval: NonfungiblePositionManager_Approval = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      owner: event.params.owner,
      approved: event.params.approved,
      tokenId: event.params.tokenId,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualNonfungiblePositionManagerApproval, expectedNonfungiblePositionManagerApproval, "Actual NonfungiblePositionManagerApproval should be the same as the expectedNonfungiblePositionManagerApproval");
  });
});
