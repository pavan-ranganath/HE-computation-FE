import {
  Box,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

import MermaidChart from '@/components/shared/MermaidChart';
import ProfileInfo from '@/components/shared/ProfileInfo';
import { SITE_CONFIG } from '@/constants';

const mermaidChart = `
  sequenceDiagram
    participant Client
    participant Service Provider
    participant Computational Domain

    rect rgb(220, 240, 255)
    Note over Client, Service Provider: Registration
    Client->>Client: Generate Homomorphic Keys
    Client->>Client: Input profile Information <br/> (Username, Name, Email, Phone)
    Client->>Client: Input SSN and generate Encrypted SSN
    Client->>Service Provider: Register with Encrypted SSN, <br/> Profile Information, Question & Hashed Answer <br/> (6-digit code, First name, City of birth, DOB) <br/> using passkey
    Client->>Client: Store Encrypted SSN and Homomorphic Keys
    end

    rect rgb(255, 240, 220)
    Note over Client, Blockchain: Advanced 2-Step Verification Process
    Client->>Service Provider: Initial login using passkey
    Service Provider->>Service Provider: Retrieve Encrypted SSN
    Service Provider->>Service Provider: Generate Random 10-digit Code
    Service Provider->>Service Provider: Select a Random Question <br/> that was provided during registration
    Service Provider->>Computational Domain: Request SSN Verification by <br/> sending phone/email, Encrypted SSN, <br/> Question, and 10-digit Code
    Computational Domain->>Computational Domain: Temporarily Store Encrypted SSN, Question, and 10-digit Code
    Computational Domain->>Client: Send Verification Link to Email/Phone

    Client->>Client: Access Link
    Client->>Client: Provide Homomorphic Keys and Encrypted SSN
    Client->>Computational Domain: Request Public Key
    Computational Domain->>Client: Send Public Key
    Client->>Client: Generate Proxy Re-encryption Key <br/> using Computational Domain's Public Key
    Client->>Computational Domain: Send Encrypted SSN and Proxy Re-encryption Key

    Computational Domain->>Computational Domain: Retrieve Encrypted SSN received from Service Provider
    Computational Domain->>Computational Domain: Homomorphically Compare SSNs
    Computational Domain-->>Client: If Comparison Fails, Notify Failed Status
    Computational Domain-->>Service Provider: If Comparison Fails, Notify Failed Status
    Service Provider-->>Blockchain: If Comparison Fails, Log Failed Status
    Computational Domain->>Client: If Comparison Succeeds, Send Random 10-digit Code and Question to Client

    Client->>Client: Answer Question, Hash Answer, <br/> Concat with 10-digit Code, then Hash
    Client->>Computational Domain: Send Final Hash

    Computational Domain->>Service Provider: Client has provided the Final Hash
    Service Provider->>Service Provider: Retrieve the Hashed Answer for Question
    Service Provider->>Service Provider: Concat Hashed Answer and 10-digit Code, then Hash
    Service Provider->>Service Provider: Compare Client-provided Hash with Computed Hash
    Service Provider-->>Client: If Comparison Fails, Notify Failed Status
    Service Provider-->>Blockchain: If Comparison Fails, Log Failed Status
    Service Provider->>Blockchain: Log Successful Verification
    Service Provider->>Client: Notify Successful Identity Verification
    end
`;

export default function Home() {
  return (
    <Box>
      <Container maxWidth='lg'>
        <Paper
          elevation={6}
          sx={{
            p: 5,
            borderRadius: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
          }}
        >
          {/* Sign In and Register Buttons */}
          <Typography
            variant='h4'
            component='h1'
            gutterBottom
            sx={{ textAlign: 'center', mb: 4 }}
          >
            {SITE_CONFIG.title}
          </Typography>
          <Stack
            direction='row'
            justifyContent='center'
            spacing={2}
            sx={{ mb: 4 }}
          >
            <ProfileInfo />
          </Stack>

          <Box sx={{ mt: 3 }}>
            <Typography
              variant='h5'
              component='h2'
              gutterBottom
              sx={{ fontWeight: 'bold', mb: 2 }}
            >
              Sequence Diagram
            </Typography>
            <MermaidChart chart={mermaidChart} />
            <Divider sx={{ my: 4 }} />

            <Box sx={{ mb: 4 }}>
              <Typography
                variant='h5'
                component='h2'
                gutterBottom
                sx={{ fontWeight: 'bold', mb: 2 }}
              >
                Registration
              </Typography>
              <Typography paragraph sx={{ fontSize: '1.1rem' }}>
                The Registration Process involves the <strong>Client</strong>{' '}
                securely registering their identity with the{' '}
                <strong>Service Provider</strong>. This process includes
                generating cryptographic keys, encrypting sensitive data, and
                storing necessary information for future verifications.
              </Typography>

              <Typography variant='h6' component='h3' gutterBottom>
                1.1 Overview
              </Typography>
              <Typography paragraph sx={{ fontSize: '1rem' }}>
                The <strong>Client</strong> generates a pair of homomorphic
                encryption keys on their device. These keys will be used to
                encrypt sensitive data (e.g., SSN) before transmitting it to the{' '}
                <strong>Service Provider</strong>.
              </Typography>
              <Typography variant='h6' component='h3' gutterBottom>
                1.2 Steps
              </Typography>
              <Typography
                component='ol'
                paragraph
                sx={{ fontSize: '1rem', pl: 2 }}
              >
                <li>
                  Homomorphic Key Generation: The
                  <strong>Client</strong> generates a pair of homomorphic
                  encryption keys on their device. These keys will be used to
                  encrypt sensitive data (e.g., SSN) before transmitting it to
                  the
                  <strong>Service Provider</strong>.
                </li>
                <li>
                  SSN Encryption: The
                  <strong>Client</strong> uses the homomorphic keys to encrypt
                  their Social Security Number (SSN).
                </li>
                <li>
                  Profile Information Input: The
                  <strong>Client</strong> inputs their profile information,
                  including Username, Name, Email, Phone Number.
                </li>
                <li>
                  Final Data Preparation: The
                  <strong>Client</strong> generates the final encrypted SSN and
                  gathers all necessary registration information, including a
                  security question and its hashed answer.
                </li>
                <li>
                  Registration Submission: The
                  <strong>Client</strong> registers with the
                  <strong>Service Provider</strong> by submitting the Encrypted
                  SSN, Profile Information, Security Question & Hashed Answer,
                  and Passkey for secure submission.
                </li>
                <li>
                  Storage: The
                  <strong>Client</strong> securely stores the homomorphic keys
                  and encrypted SSN on their device for future use.
                </li>
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ mb: 4 }}>
              <Typography
                variant='h5'
                component='h2'
                gutterBottom
                sx={{ fontWeight: 'bold', mb: 2 }}
              >
                Advanced 2-Step Verification Process
              </Typography>
              <Typography paragraph sx={{ fontSize: '1.1rem' }}>
                The Advanced 2-Step Verification Process ensures the{' '}
                <strong>Client's</strong> identity is verified securely using
                their previously registered information. This process involves
                the
                <strong>Service Provider</strong> and{' '}
                <strong>Computational Domain</strong> working together to
                validate the
                <strong>Client’s</strong> identity through encrypted SSN
                comparison and a security question challenge.
              </Typography>

              <Typography variant='h6' component='h3' gutterBottom>
                2.1 Overview
              </Typography>
              <Typography paragraph sx={{ fontSize: '1rem' }}>
                The <strong>Client</strong> initiates the login process using
                their passkey. The <strong>Service Provider</strong> retrieves
                the <strong>Client’s</strong> encrypted SSN from its database.
              </Typography>
              <Typography variant='h6' component='h3' gutterBottom>
                2.2 Steps
              </Typography>
              <Typography
                component='ol'
                paragraph
                sx={{ fontSize: '1rem', pl: 2 }}
              >
                <li>
                  Initial Login: The
                  <strong>Client</strong> initiates the login process using
                  their passkey.
                </li>
                <li>
                  Random Code and Question Generation: The
                  <strong>Service Provider</strong> generates a random 10-digit
                  code and selects a security question.
                </li>
                <li>
                  SSN Verification Request: The
                  <strong>Service Provider</strong> sends a request to the
                  <strong>Computational Domain</strong> for SSN verification.
                </li>
                <li>
                  Temporary Storage and Verification Link: The
                  <strong>Computational Domain</strong> temporarily stores the
                  received SSN, question, and 10-digit code.
                </li>
                <li>
                  Client Verification: The
                  <strong>Client</strong> accesses the link, provides their
                  homomorphic keys, and requests the
                  <strong>Computational Domain’s</strong> public key.
                </li>
                <li>
                  SSN Comparison: The
                  <strong>Computational Domain</strong> retrieves the SSN
                  received from the
                  <strong>Service Provider</strong> and compares it
                  homomorphically with the
                  <strong>Client’s</strong> encrypted SSN.
                </li>
                <li>
                  Final Verification: The
                  <strong>Client</strong> answers the question, hashes the
                  answer, concatenates it with the 10-digit code, and hashes the
                  result.
                </li>
                <li>
                  Hash Comparison and Final Outcome: The
                  <strong>Service Provider</strong> retrieves the hashed answer
                  and the 10-digit code, hashes them, and compares the result
                  with the hash provided by the
                  <strong>Client</strong>.
                </li>
              </Typography>
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ mb: 4 }}>
              <Typography
                variant='h5'
                component='h2'
                gutterBottom
                sx={{ fontWeight: 'bold', mb: 2 }}
              >
                Summary
              </Typography>
              <Typography paragraph sx={{ fontSize: '1.1rem' }}>
                This Advanced Two Factor Authentication employs cryptographic
                techniques like homomorphic encryption to ensure the security of
                sensitive data. The process is designed to safeguard against
                unauthorized access, providing a robust solution for identity
                verification that meets high standards of security and
                compliance.
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
