# @demografix/n8n-nodes-agify

This is an n8n community node. It lets you use Agify.io in your n8n workflows.

Agify.io is an age prediction API that infers age based on first names using statistical analysis.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Usage](#usage)
[Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

- **Get Age**: Predict the age for a given first name based on statistical analysis

## Credentials

### Free Tier (No Authentication Required)
You can start using this node immediately without any credentials. The free tier provides:
- **100 requests per day** per IP address
- No signup required
- No API key needed

### Paid Tier (API Key Required)
For higher request volumes, you can subscribe to a paid plan at [agify.io](https://agify.io) with various tier options for increased rate limits.

**Setting up credentials:**
1. Sign up at [agify.io](https://agify.io)
2. Subscribe to a paid plan to receive your API key
3. In n8n, create new "Agify API" credentials
4. Enter your API key
5. Test the credentials to verify they work

## Compatibility

This node is built using n8n's declarative style and requires n8n version 1.0 or later.

## Usage

### Basic Example
1. Add the "Agify" node to your workflow
2. Enter a first name (e.g., "Peter", "Sarah", "Alex")
3. Execute the node

### Response Data
The node returns the following data:
- `name`: The name that was queried
- `age`: Predicted age (integer)
- `count`: Number of data samples used for this prediction
- `rateLimit.limit`: Total requests allowed in current period
- `rateLimit.remaining`: Requests remaining in current period
- `rateLimit.reset`: Seconds until rate limit resets

### Tips
- A higher `count` indicates a more reliable prediction backed by more data
- The API supports diacritics and non-Latin alphabets
- Use the optional country code parameter to improve accuracy for region-specific naming conventions
- Use the `rateLimit` data to monitor your API usage and avoid hitting limits

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
- [Agify.io official website](https://agify.io)
- [Agify.io API documentation](https://agify.io/documentation)
